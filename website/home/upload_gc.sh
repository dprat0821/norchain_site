

gsutil acl ch -u AllUsers:R gs://www.norchain.io
gsutil defacl set public-read gs://www.norchain.io
gsutil rsync -R . gs://www.norchain.io