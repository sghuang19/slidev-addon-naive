param(
    [string] $FilePath
)

Get-Content $FilePath | 
Select-String -AllMatches '(?<=<)(N[A-Z]|n-)[A-Za-z-]*' | 
ForEach-Object { $_.Matches.Value } |
Sort-Object -Unique |
ForEach-Object {
    $_ -match '^N[A-Z]' ?
    $_ :
    $_ -split '-' |
    ForEach-Object { $_[0].ToString().ToUpper() + $_.Substring(1) } |
    Join-String
} |
Sort-Object -Unique
