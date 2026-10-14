# Baixa as imagens do site original para src\img\
# Uso (no terminal do VS Code, dentro da pasta onde esta o index.html):
#   powershell -ExecutionPolicy Bypass -File .\baixar-imagens.ps1

$base = "https://casanaarvore.lovable.app"
$dest = Join-Path $PSScriptRoot "src\img"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$arquivos = [ordered]@{
  "treehouse-hero.jpg"   = "/assets/treehouse-hero-mDovbOFH.jpg"
  "treehouse-detail.jpg" = "/assets/treehouse-detail-BKssy9tY.jpg"
  "logo-completa.png"    = "/__l5e/assets-v1/2c85f0a3-4af5-4a7b-b1cb-351cc8406950/logo-completa.png"
  "planta.jpeg"          = "/__l5e/assets-v1/fc6c9afe-2521-4883-be41-fb4baab3a911/planta.jpeg"
  "fachada.jpg"          = "/assets/fachada-DjGLUv8M.jpg"
  "planta-terreo.jpg"    = "/assets/planta-terreo-koHCLu3X.jpg"
  "planta-superior.jpg"  = "/assets/planta-superior-CLSmEkno.jpg"
  "patio.jpg"            = "/assets/patio-CV6QtdeZ.jpg"
  "sala-escada.jpg"      = "/assets/sala-escada-B7d0iZok.jpg"
  "sala-jardim.jpg"      = "/assets/sala-jardim-I5RINK6L.jpg"
  "cozinha-patio.jpg"    = "/assets/cozinha-patio-M4wU6b7P.jpg"
  "sala-tv.jpg"          = "/assets/sala-tv-CECiCcc7.jpg"
  "lazer-noturno.jpg"    = "/assets/lazer-noturno-CxO5NoUT.jpg"
  "suite.jpg"            = "/assets/suite-Bg10Tpoa.jpg"
  "banheiro.jpg"         = "/assets/banheiro-CankzpnH.jpg"
  "capela-fachada.jpg"   = "/assets/hero-fachada-aprimorada-lnyh15hq.jpg"
  "capela-nave.jpg"      = "/assets/interior-nave-aprimorada-CiVUKeg8.jpg"
  "capela-lateral.jpg"   = "/assets/vista-lateral-aprimorada-Dq9PZ-84.jpg"
  "capela-porta.jpg"     = "/assets/vista-porta-aprimorada-DPqXpePo.jpg"
  "capela-vitrais.jpg"   = "/assets/sis-vitrais-aprimorada-jsQlCoOW.jpg"
  "capela-taipa.jpg"     = "/assets/sis-taipa-aprimorada-DvFjtEJL.jpg"
}

$ok = 0; $falhas = @()
foreach ($nome in $arquivos.Keys) {
  $url = $base + $arquivos[$nome]
  try {
    Invoke-WebRequest -Uri $url -OutFile (Join-Path $dest $nome) -UseBasicParsing
    Write-Host "OK      $nome"
    $ok++
  } catch {
    Write-Host "FALHOU  $nome  ($url)" -ForegroundColor Red
    $falhas += $nome
  }
}
Write-Host ""
Write-Host "$ok de $($arquivos.Count) imagens baixadas."
if ($falhas.Count) { Write-Host "Com falha: $($falhas -join ', ')" -ForegroundColor Yellow }