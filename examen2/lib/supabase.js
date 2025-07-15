import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';

const supabaseUrl = 'https://iygkvwsmhgpbfripvcvi.supabase.co'; // Reemplaza con tu URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5Z2t2d3NtaGdwYmZyaXB2Y3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MTA3MzYsImV4cCI6MjA2ODA4NjczNn0.HOwzaja0cfybn_K0_iRXXduSk0jwCGG4XzpHay0tLoI'; // Reemplaza con tu clave anónima

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: SecureStore,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});