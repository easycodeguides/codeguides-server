url=$1
git ls-remote $url |
  grep '[[:space:]]\(HEAD\|refs/heads/master\|refs/tags\)' |
  grep -v '\^{}$' | awk '{print "0032want " $1}' > binarydata
echo 00000009done >> binarydata
mb=$(curl -s -X POST --data-binary @binarydata \
  -H "Content-Type: application/x-git-upload-pack-request" \
  -H "Accept-Encoding: deflate, gzip" \
  -H "Accept: application/x-git-upload-pack-result" \
  -A "git/1.7.9" $url/git-upload-pack | wc -c |
  awk '{x=$1/1000000; print x}')
echo $mb
rm binarydata


# 473kb, 882kb, 1.3mb
# 0.07   0.234  0.398
