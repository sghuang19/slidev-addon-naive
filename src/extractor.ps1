param( [string] $FilePath )

Get-Content $FilePath | 
Select-String -AllMatches '(?<=<)(N[A-Z]|n-)[A-Za-z-]*' | 
ForEach-Object { $_.Matches.Value } |
Sort-Object -Unique |
ForEach-Object {
    $_ -clike 'N*' ?
    $_ :
    (
        $_ -split '-' |
        ForEach-Object { (Get-Culture).TextInfo.ToTitleCase($_) } |
        Join-String
    )
} |
Sort-Object -Unique
