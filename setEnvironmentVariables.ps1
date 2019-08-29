Write-Output "Passing CI environment variable"
[Environment]::SetEnvironmentVariable("CI", "true", "User")