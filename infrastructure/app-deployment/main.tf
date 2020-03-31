locals {
  appUrl = "${var.app_name}%{if terraform.workspace != "production"}.${terraform.workspace}%{endif}.${var.domain}"
}

provider "aws" {
  region  = "eu-west-2"
  version = "~> 2.6"
}

provider "aws" {
  alias   = "us"
  region  = "us-east-1"
  version = "~> 2.6"
}

data "aws_route53_zone" "zone" {
  name = var.domain
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.zone.zone_id
  name    = local.appUrl
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "paul" {
  zone_id = data.aws_route53_zone.zone.zone_id
  name    = "paul.potsides.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

# app s3 bucket
resource "aws_s3_bucket" "app_bucket" {
  bucket = local.appUrl

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  tags = {
    Environment = "${terraform.workspace}"
  }
}

data "aws_acm_certificate" "ssl" {
  provider    = aws.us // AWS requires SSL certificates to live in their first availability zone.
  domain      = var.domain
  statuses    = ["ISSUED"]
  most_recent = true
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled             = true
  default_root_object = "index.html"
  aliases             = ["${local.appUrl}", "paul.potsides.com"]
  is_ipv6_enabled     = true

  ordered_cache_behavior {
    allowed_methods        = ["GET","HEAD"] 
    cached_methods         = ["GET", "HEAD"]
    compress               = false
    default_ttl            = 86400
    max_ttl                = 31536000
    min_ttl                = 0
    path_pattern           = "/minesweeper/*"
    smooth_streaming       = false
    target_origin_id       = "S3-minesweeper.potsides.com"
    trusted_signers        = []
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      headers                 = []
      query_string            = true
      query_string_cache_keys = []

      cookies {
          forward           = "none"
          whitelisted_names = []
        }
    }
  }

  ordered_cache_behavior {
    allowed_methods        = ["GET","HEAD"] 
    cached_methods         = ["GET", "HEAD"]
    compress               = false
    default_ttl            = 86400
    max_ttl                = 31536000
    min_ttl                = 0
    path_pattern           = "/cv/*"
    smooth_streaming       = false
    target_origin_id       = "S3-cv.potsides.com"
    trusted_signers        = []
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      headers                 = []
      query_string            = true
      query_string_cache_keys = []

      cookies {
          forward           = "none"
          whitelisted_names = []
        }
    }
  }

  ordered_cache_behavior {
    allowed_methods        = ["GET","HEAD"] 
    cached_methods         = ["GET", "HEAD"]
    compress               = false
    default_ttl            = 86400
    max_ttl                = 31536000
    min_ttl                = 0
    path_pattern           = "/platformer/*"
    smooth_streaming       = false
    target_origin_id       = "S3-platformer.potsides.com"
    trusted_signers        = []
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      headers                 = []
      query_string            = true
      query_string_cache_keys = []

      cookies {
          forward           = "none"
          whitelisted_names = []
        }
    }
  }

  ordered_cache_behavior {
    allowed_methods        = ["GET","HEAD"] 
    cached_methods         = ["GET", "HEAD"]
    compress               = false
    default_ttl            = 86400
    max_ttl                = 31536000
    min_ttl                = 0
    path_pattern           = "/tetris/*"
    smooth_streaming       = false
    target_origin_id       = "S3-tetris.potsides.com"
    trusted_signers        = []
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      headers                 = []
      query_string            = true
      query_string_cache_keys = []

      cookies {
          forward           = "none"
          whitelisted_names = []
        }
    }
  }

  ordered_cache_behavior {
    allowed_methods        = ["GET","HEAD"] 
    cached_methods         = ["GET", "HEAD"]
    compress               = false
    default_ttl            = 86400
    max_ttl                = 31536000
    min_ttl                = 0
    path_pattern           = "/wordgame/*"
    smooth_streaming       = false
    target_origin_id       = "S3-wordgame.potsides.com"
    trusted_signers        = []
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      headers                 = []
      query_string            = true
      query_string_cache_keys = []

      cookies {
          forward           = "none"
          whitelisted_names = []
        }
    }
  }

  origin {
    domain_name = aws_s3_bucket.app_bucket.website_endpoint
    origin_id   = "S3-${local.appUrl}"

    custom_origin_config {
      http_port                = "80"
      https_port               = "443"
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_ssl_protocols     = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  origin {
    domain_name = "minesweeper.potsides.com.s3.amazonaws.com"
    origin_id   = "S3-minesweeper.potsides.com"
    custom_origin_config {
      http_port                = "80"
      https_port               = "443"
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_ssl_protocols     = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  origin {
    domain_name = "cv.potsides.com.s3.amazonaws.com"
    origin_id   = "S3-cv.potsides.com"
    custom_origin_config {
      http_port                = "80"
      https_port               = "443"
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_ssl_protocols     = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  origin {
    domain_name = "platformer.potsides.com.s3.amazonaws.com"
    origin_id   = "S3-platformer.potsides.com"
    custom_origin_config {
      http_port                = "80"
      https_port               = "443"
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_ssl_protocols     = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }


  origin {
    domain_name = "tetris.potsides.com.s3.amazonaws.com"
    origin_id   = "S3-tetris.potsides.com"
    custom_origin_config {
      http_port                = "80"
      https_port               = "443"
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_ssl_protocols     = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  origin {
    domain_name = "wordgame.potsides.com.s3.amazonaws.com"
    origin_id   = "S3-wordgame.potsides.com"
    custom_origin_config {
      http_port                = "80"
      https_port               = "443"
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_ssl_protocols     = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = data.aws_acm_certificate.ssl.arn
    minimum_protocol_version = "TLSv1"
    ssl_support_method       = "sni-only"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${local.appUrl}"
    compress         = "true"

    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = terraform.workspace == "production" ? 86400 : 0
    max_ttl                = terraform.workspace == "production" ? 31536000 : 0
  }

  custom_error_response {
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = 300
  }
}
