
# Automated Scorekeeps using Jenkins

Its uses Jenkins to automate a CronJob which kills and restarts the server every hour.

NodeJs is used to make the server.

All the installations are made inside the pipeline and not on the local computer.

## Pre-requisites

* Installed Jenkins

* Installed Ubuntu

* Started Jenkins container (container using Jenkins Image) in Docker ( For eg if the name of the container is Jenkins)

```bash
    docker start Jenkins
```


## Making the Pipeline

    1. Click on new CronJob

    2. Click on pipeline

    3. Set add pipeline with SCM ( Source Code Manager)

    4. Add the GitHub repo by making the repo public or using SSH keys or any other method.

    5. Click on build.

## Documentation

[Jenkins](https://www.jenkins.io/doc/)

[Docker](https://docs.docker.com/)



