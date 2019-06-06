FROM java:8
VOLUME /tmp
ADD todo.jar todo.jar
RUN bash -c 'touch /todo.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/todo.jar"]