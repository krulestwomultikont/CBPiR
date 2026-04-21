// 1. Konfiguracja połączenia
const supabaseUrl = 'https://dagmflfhbvgszthpinqd.supabase.co/rest/v1/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhZ21mbGZoYnZnc3p0aHBpbnFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NzY4ODgsImV4cCI6MjA5MjM1Mjg4OH0.cDkiR3zL68xNOi1p7NQeVYoXoVqoQk70SLmhG8xmMFs';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 2. Funkcja logowania dla Ciebie (Admina)
async function zaloguj(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert("Błąd logowania: " + error.message);
    } else {
        alert("Zalogowano pomyślnie!");
        console.log("Twój użytkownik:", data.user);
    }
}

// 3. Funkcja pobierania postaci (dla każdego)
async function pobierzPostacie() {
    const { data, error } = await supabase
        .from('postacie')
        .select(`
            id,
            imie,
            biografia,
            role ( nazwa )
        `);

    if (error) {
        console.error("Błąd pobierania:", error);
    } else {
        return data;
    }
}

// Eksportujemy supabase, żeby inne pliki miały do niego dostęp
window.supabase = supabase;