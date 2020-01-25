terraform {
  backend "s3" {
    bucket = "www-potsides-com-terraform-state"
    key    = "terraform.tfstate"
    region = "eu-west-2"
  }
}
