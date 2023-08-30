FROM nginxinc/nginx-unprivileged:1.25.2

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY public/all.html /usr/share/nginx/html/all.html
COPY public/index.html /usr/share/nginx/html/index.html
COPY public/dice.js /usr/share/nginx/html/dice.js
COPY public/dice.css /usr/share/nginx/html/dice.css
