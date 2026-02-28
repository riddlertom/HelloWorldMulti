import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DOMAINS = [
  { name: 'Google', domain: 'google.com' },
  { name: 'Imgur', domain: 'imgur.com' },
  { name: 'Reddit', domain: 'reddit.com' },
];

type RdapData = {
  ldhName?: string;
  status?: string[];
  events?: { eventAction: string; eventDate: string }[];
  nameservers?: { ldhName: string }[];
  entities?: unknown[];
} | null;

export default function WhoisScreen() {
  const [loading, setLoading] = useState<string | null>(null);
  const [results, setResults] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);

  const fetchWhois = async (domain: string) => {
    setLoading(domain);
    setError(null);
    try {
      const res = await fetch(`https://rdap.org/domain/${domain}`);
      const data: RdapData = await res.json();

      if (!res.ok) {
        throw new Error(data?.status ? String(data.status) : 'Lookup failed');
      }

      const lines: string[] = [];
      lines.push(`Domain: ${data?.ldhName ?? domain}`);
      if (data?.status?.length) {
        lines.push(`Status: ${data.status.join(', ')}`);
      }
      if (data?.events?.length) {
        data.events.forEach((e) => {
          lines.push(`${e.eventAction}: ${e.eventDate}`);
        });
      }
      if (data?.nameservers?.length) {
        const ns = data.nameservers
          .map((n) => (n && 'ldhName' in n ? String(n.ldhName) : ''))
          .filter(Boolean);
        if (ns.length) lines.push(`Nameservers: ${ns.join(', ')}`);
      }

      setResults((prev) => ({ ...prev, [domain]: lines.join('\n') }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Lookup failed');
      setResults((prev) => ({ ...prev, [domain]: 'Error fetching data.' }));
    } finally {
      setLoading(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Whois / RDAP Lookup</Text>
      <Text style={styles.subtitle}>
        Tap a domain to fetch registration info
      </Text>

      {DOMAINS.map(({ name, domain }) => (
        <View key={domain} style={styles.card}>
          <Pressable
            style={styles.button}
            onPress={() => fetchWhois(domain)}
            disabled={loading !== null}
          >
            {loading === domain ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>{name} ({domain})</Text>
            )}
          </Pressable>
          {results[domain] ? (
            <ScrollView
              style={styles.result}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.resultText}>{results[domain]}</Text>
            </ScrollView>
          ) : null}
        </View>
      ))}

      {error ? (
        <Text style={styles.error}>Error: {error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: '#6366f1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  result: {
    marginTop: 12,
    maxHeight: 180,
  },
  resultText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#334155',
    lineHeight: 18,
  },
  error: {
    color: '#dc2626',
    fontSize: 14,
    marginTop: 8,
  },
});
