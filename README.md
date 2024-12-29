# ZemVer

ZemVer combines SemVer and CalVer to produce a versioning system that is suitable for product releases.

```
&lt;year&gt;.&lt;month&gt;.&lt;code&gt;[-&lt;prerelease&gt;][+&lt;build&gt;]
^(\d{4})\.(\d{1,2})\.(\d+)(?:\-([^+]+))?(?:\+(.+))?$
```

## But, why?

- ZemVer makes it easier to identify the release time using `year` and `month` component.
- ZemVer uses `code` component as it's primary version identifier.

## License

[MIT](./LICENSE)
