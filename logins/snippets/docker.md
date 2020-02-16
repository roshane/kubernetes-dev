### start docker rabbitmq container

* `docker run -d --hostname localhost -p 15672:15672 {container-id}`

### start docker postgres container

* `docker run -e POSTGRES_PASSWORD=password -p 5432:5432 -v D:\docker_mounted\pgdata:/var/lib/postgresql/data -d 02073e5b96cf`
