// Konfiguracja połączenia z Twoim państwem
const supabaseUrl = 'https://dagmflfhbvgszthpinqd.supabase.co';
const supabaseKey = 'TWOJ_ANON_KEY_KTORY_MI_PODALES';

// Inicjalizacja klienta Supabase
// Używamy globalnej zmiennej 'supabase', którą ładujemy w plikach HTML z CDN
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Eksportujemy klienta do okna przeglądarki, żeby admin.html i index.html go widziały
window.supabaseClient = _supabase;

console.log("System państwowy zainicjowany poprawnie.");