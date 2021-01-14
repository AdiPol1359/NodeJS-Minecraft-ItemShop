# NodeJS-Minecraft-ItemShop

### Co to jest?
NodeJS-Minecraft-ItemShop to darmowy sklep minecraft umożliwiający kupno usług na Twój serwer.

## Wymagania:
 - NodeJS
 - Certbot (opcjonalne)
 
## Sposób instalacji:
 1. Pobierz pliki z repozytorium
 2. Wypakuj pliki do folderu
 3. W konsoli przejdź do folderu z plikami strony ("cd scieżka")
 4. Wpisz w konsoli 'npm i'
 5. Przejdź do pliku page.json, który znajduje się w folderze configs
 6. 'Host' zmień na IP Twojej maszyny, a następnie zapisz
 7. Wróć do głównego folderu z plikami strony
 8. Odpal stronę komendą 'node app'
 
## Jak włączyć wsparcie dla certyfikatu SSL?
 1. Przejdź do pliku page.json, który znajduje się w folderze configs
 2. ustaw 'enableHTTPS' na true
 3. Wygeneruj certyfikat komendą: 'certbot --apache -d mojadomena.pl'
 4. Przejdź do pliku certificate.json, który znajduje się w folderze configs
 5. W 'privateKey', 'certificate' oraz 'chain' podmień 'domena.pl' na domenę, którą podałeś przy generowaniu certyfikatu
 
## Jak wdrożyć zmiany na stronie?
 Aby zmiany zostały wprowadzone na stronie, należy zrestartować całą apliakcję (tzn. zatrzymać ją i uruchomić od nowa)

## Funkjonalności:
 - Wspiera certyfikat SSL
 - Możliwość edytowania wyglądu każdego elementu na stronie
 - Możliwość konfiguracji sklepu dzięki plikom konfiguracyjnym
 - Responzywność
 - Komunikacja strony z serwerem minecraft
 
## Dostępne metody płatności
 - SMS
 
## Dostępni operatorzy płatności SMS
 - lvlup.pro
 
## TODO:
 - [ ] implementacja operatora hotpay
 - [ ] wdrożenie płatności PayPal
 - [ ] wdrożenie płatności PSC
 - [ ] możliwość dodania własnych podstron
