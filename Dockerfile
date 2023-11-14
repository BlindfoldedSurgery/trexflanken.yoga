FROM nginxinc/nginx-unprivileged:1.25.3

USER root

RUN chown -R nginx:nginx /usr/share/nginx/

USER nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --chown=nginx:nginx public/all.html /usr/share/nginx/html/all.html
COPY --chown=nginx:nginx public/rules.html /usr/share/nginx/html/rules.html
COPY --chown=nginx:nginx public/index.html /usr/share/nginx/html/index.html
COPY --chown=nginx:nginx public/dice.js /usr/share/nginx/html/dice.js
COPY --chown=nginx:nginx public/dice.css /usr/share/nginx/html/dice.css
COPY --chown=nginx:nginx public/favicon.png /usr/share/nginx/html/favicon.png
COPY --chown=nginx:nginx public/instagram_logo_2016.svg /usr/share/nginx/html/instagram_logo_2016.svg

RUN sed -zri 's/\n//g' /usr/share/nginx/html/*.html
RUN sed -zri 's/ +/ /g' /usr/share/nginx/html/*.html
RUN sed -zri 's/> </></g' /usr/share/nginx/html/*.html

RUN sed -zri 's/(\{|;|^)\n/\1/g' /usr/share/nginx/html/*.css && \
    sed -zri 's/ +//g' /usr/share/nginx/html/*.css && \
    sed -zri 's/}\n/}/g' /usr/share/nginx/html/*.css
