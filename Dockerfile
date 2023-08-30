FROM nginxinc/nginx-unprivileged:1.25.2

COPY public/index.html /usr/share/nginx/html/index.html
COPY public/dice.js /usr/share/nginx/html/dice.js
COPY public/dice.css /usr/share/nginx/html/dice.css
