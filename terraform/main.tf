terraform {
    backend "gcs" {
        bucket = "sotrybooks-321520-terraform"
        prefix = "/state/storybooks"
    }
}