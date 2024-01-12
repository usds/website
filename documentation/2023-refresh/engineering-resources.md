# Usability ideas

- gh desktop

# Gotchas

- gh pages info is on `Settings | Pages`
- uswds compilation is pretty wild
- if you do upgrade, check issue #634 for info about how the iframe is looking for uswds
- bottom of `/apply` is not an iframe. there's some sizing stuff going on to pay attention to
- Lisa's gonna look at codespaces PR
- dependabot PR merging process?
- cloud.gov staging deploy isn't tested
- in github codespaces, how to downgrade the ruby version:

```
$ rvm list
   ruby-3.0.5 [ x86_64 ]
=* ruby-3.1.3 [ x86_64 ]
$ rvm  install ruby-3.2.2
[...]
$ bundle install
[...]
$ bundle exec jekyll serve
[rainbows and unicorns]
```

# Resources

- sprint.usds.gov / its repo
- `onceler` repo for gh actions
