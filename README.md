# coverage-warning

Provides a `coverage-warning` command that when run emits the following message:

```sh
With Great Power Comes Great Responsibility:

  Adding tests solely for the purpose of increasing code coverage
  considered harmful:

    * http://www.dan-manges.com/blog/increasing-code-coverage-may-be-harmful

  Good tests verify the desired behavior of the program in the tersest,
  most easy to comprehend manner. Your coverage report is available as
  'coverage-report.html'.

Please use this information in a responsible manner.
```

allowing you minimize the chance that any coverage report facility you provide is misused.
