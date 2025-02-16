param(
    [string]$FILE_PATH = "slides.md"
)

# 1. Extract open tags of Naive UI components and
# 2. Remove duplicates
# 3. Remove prefixes and suffixes
# 4. Remove duplicates again

(Get-Content $FILE_PATH | 
Select-String -Pattern "<N[A-Z][a-zA-Z]*[ />]" -AllMatches).Matches.Value | 
Sort-Object -Unique | 
ForEach-Object { $_ -replace "^<(.*)[ />]$", '$1' } | 
Sort-Object -Unique
