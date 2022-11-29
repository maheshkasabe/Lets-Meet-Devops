terraform {
  required_providers {
    civo = {
      source = "civo/civo"
      version = "0.10.3"
    }
  }
}

provider "civo" {
  token = "token"
}

resource "civo_kubernetes_cluster" "my-cluster" {
    name = "sammy"
    region = "LON1"
    applications = "Argo-cd"
    num_target_nodes = 3
    target_nodes_size = "g3.k3s.xsmall"
}
