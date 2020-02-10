# Sunshine PHP 2020

These repo contains the support files used on my talks at Sunshine PHP 2020. #sunphp20.

The PHP examples under `kubernetes-skaffold` are from `https://github.com/ProdigyView-Toolkit/Microservices-Examples-PHP` full credit to [Devin Dixon](https://github.com/ProdigyView).

## Disclaimer please read before use

***This is not an optimized nor a production ready code. These project was done for educational purpuse and might not be using best practices or ideal architecture.***

## Get started

```shell
# creating a Kubernetes cluster with kind.
kind create cluster --name sunphp20 --config kind.yaml

# setup ingress
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.28.0/deploy/static/mandatory.yaml

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.28.0/deploy/static/provider/baremetal/service-nodeport.yaml

kubectl patch deployments -n ingress-nginx nginx-ingress-controller -p '{"spec":{"template":{"spec":{"containers":[{"name":"nginx-ingress-controller","ports":[{"containerPort":80,"hostPort":80},{"containerPort":443,"hostPort":443}]}],"nodeSelector":{"ingress-ready":"true"},"tolerations":[{"key":"node-role.kubernetes.io/master","operator":"Equal","effect":"NoSchedule"}]}}}}'
```


```shell
# use helm to install rabbitmq
helm install --name rabbitmq stable/rabbitmq

# rabbitmq
Credentials:

    Username      : user
    echo "Password      : $(kubectl get secret --namespace develop rabbitmq -o jsonpath="{.data.rabbitmq-password}" | base64 --decode)"
    echo "ErLang Cookie : $(kubectl get secret --namespace develop rabbitmq -o jsonpath="{.data.rabbitmq-erlang-cookie}" | base64 --decode)"

RabbitMQ can be accessed within the cluster on port  at rabbitmq.develop.svc.cluster.local

To access for outside the cluster, perform the following steps:

To Access the RabbitMQ AMQP port:

    kubectl port-forward --namespace develop svc/rabbitmq 5672:5672
    echo "URL : amqp://127.0.0.1:5672/"

To Access the RabbitMQ Management interface:

    kubectl port-forward --namespace develop svc/rabbitmq 15672:15672
    echo "URL : http://127.0.0.1:15672/"
```

```shell
# kuberntes-050
kubectl apply -f kubernetes-050/
```

```shell
# kuberntes-skaffold
cd kubernetes-skaffold

skaffold dev
```
