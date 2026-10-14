#!/usr/bin/env bash
# Baixa as imagens do site original para src/img/ (rode no seu computador, com internet)
# Uso:  bash download-imagens.sh
set -e
cd "$(dirname "$0")/src/img"
B="https://casanaarvore.lovable.app"
get(){ echo "baixando $2"; curl -fsSL "$1" -o "$2" || echo "  FALHOU: $1"; }
get "$B/assets/treehouse-hero-mDovbOFH.jpg" treehouse-hero.jpg
get "$B/assets/treehouse-detail-BKssy9tY.jpg" treehouse-detail.jpg
get "$B/__l5e/assets-v1/2c85f0a3-4af5-4a7b-b1cb-351cc8406950/logo-completa.png" logo-completa.png
get "$B/__l5e/assets-v1/fc6c9afe-2521-4883-be41-fb4baab3a911/planta.jpeg" planta.jpeg
get "$B/assets/fachada-DjGLUv8M.jpg" fachada.jpg
get "$B/assets/planta-terreo-koHCLu3X.jpg" planta-terreo.jpg
get "$B/assets/planta-superior-CLSmEkno.jpg" planta-superior.jpg
get "$B/assets/patio-CV6QtdeZ.jpg" patio.jpg
get "$B/assets/sala-escada-B7d0iZok.jpg" sala-escada.jpg
get "$B/assets/sala-jardim-I5RINK6L.jpg" sala-jardim.jpg
get "$B/assets/cozinha-patio-M4wU6b7P.jpg" cozinha-patio.jpg
get "$B/assets/sala-tv-CECiCcc7.jpg" sala-tv.jpg
get "$B/assets/lazer-noturno-CxO5NoUT.jpg" lazer-noturno.jpg
get "$B/assets/suite-Bg10Tpoa.jpg" suite.jpg
get "$B/assets/banheiro-CankzpnH.jpg" banheiro.jpg
get "$B/assets/hero-fachada-aprimorada-lnyh15hq.jpg" capela-fachada.jpg
get "$B/assets/interior-nave-aprimorada-CiVUKeg8.jpg" capela-nave.jpg
get "$B/assets/vista-lateral-aprimorada-Dq9PZ-84.jpg" capela-lateral.jpg
get "$B/assets/vista-porta-aprimorada-DPqXpePo.jpg" capela-porta.jpg
get "$B/assets/sis-vitrais-aprimorada-jsQlCoOW.jpg" capela-vitrais.jpg
get "$B/assets/sis-taipa-aprimorada-DvFjtEJL.jpg" capela-taipa.jpg
echo "Pronto. A foto da projetista (projetista.jpg) já está na pasta."
