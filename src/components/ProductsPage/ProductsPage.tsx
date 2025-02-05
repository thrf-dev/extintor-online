// src/pages/ProductsPage.tsx
import React, { useState } from "react";
import styles from "./style.module.scss";

import abrigoembutir from "../../assets/images/produtos/abrigos/abrigo-embutir.svg";
import abrigosobrepor from "../../assets/images/produtos/abrigos/abrigo-sobrepor.svg";
import abrigosobreporduplo from "../../assets/images/produtos/abrigos/abrigo-sobreporduplo.svg";

import barradupla from "../../assets/images/produtos/acessorios/barra-dupla.svg";
import barrasimples from "../../assets/images/produtos/acessorios/barra-simples.svg";
import chave from "../../assets/images/produtos/acessorios/chave-atorz.svg";
import detector from "../../assets/images/produtos/acessorios/detector.svg";
import luminaria from "../../assets/images/produtos/acessorios/luminaria.svg";
import mangueira from "../../assets/images/produtos/acessorios/mangueira.svg";
import maoreforcada from "../../assets/images/produtos/acessorios/mao-reforcada.svg";
import motobomba from "../../assets/images/produtos/acessorios/motobomba.svg";
import suporte from "../../assets/images/produtos/acessorios/suporte-extintor.svg";

import acionador from "../../assets/images/produtos/botoeiras/acionador-3fios.svg";
import acionadormartelo from "../../assets/images/produtos/botoeiras/acionador-martelo.svg";
import botoeira2fios from "../../assets/images/produtos/botoeiras/botoeira-2fios.svg";
import botoeira3fios from "../../assets/images/produtos/botoeiras/botoeira-3fios.svg";
import centralconvencional from "../../assets/images/produtos/botoeiras/central-convencional.svg";
import central from "../../assets/images/produtos/botoeiras/central.svg";
import portachave from "../../assets/images/produtos/botoeiras/porta-chave.svg";
import sireneaudio from "../../assets/images/produtos/botoeiras/sirene-audio.svg";
import sireneaudiovisual from "../../assets/images/produtos/botoeiras/sirene-audiovisual.svg";
import sirenecornetaaudiovisual from "../../assets/images/produtos/botoeiras/sirene-cornetaaudiovisual.svg";
import sirenecornetapreta from "../../assets/images/produtos/botoeiras/sirene-cornetapreta.svg";

import ab from "../../assets/images/produtos/conexoes/ab.svg";
import acoplamentoflexivel from "../../assets/images/produtos/conexoes/acoplamento-flexivel.svg";
import acoplamentorigido from "../../assets/images/produtos/conexoes/acoplamento-rigido.svg";
import acoplamentoreducao from "../../assets/images/produtos/conexoes/acoplamento-reducao.svg";
import adaptador from "../../assets/images/produtos/conexoes/adaptador-storz.svg";
import cotoveloranhurado45 from "../../assets/images/produtos/conexoes/cotovelo-ranhurado45.svg";
import cotoveloranhurado90 from "../../assets/images/produtos/conexoes/cotovelo-ranhurado90.svg";
import cotovelo45 from "../../assets/images/produtos/conexoes/cotovelo45.svg";
import cotovelo90 from "../../assets/images/produtos/conexoes/cotovelo90.svg";
import cruzeta from "../../assets/images/produtos/conexoes/cruzeta-ranhurada.svg";
import flange from "../../assets/images/produtos/conexoes/flange.svg";
import luva from "../../assets/images/produtos/conexoes/luva.svg";
import niple from "../../assets/images/produtos/conexoes/niple.svg";
import reducao from "../../assets/images/produtos/conexoes/redução.svg";
import tgalvanizado from "../../assets/images/produtos/conexoes/T-galvanizado.svg";
import tmecanico from "../../assets/images/produtos/conexoes/T-mecanico.svg";
import tranhurado from "../../assets/images/produtos/conexoes/t-ranhurado.svg";
import treducao from "../../assets/images/produtos/conexoes/t-reducao.svg";
import tampao from "../../assets/images/produtos/conexoes/tampao.svg";
import tubo from "../../assets/images/produtos/conexoes/tubo.svg";

import esguicho from "../../assets/images/produtos/esguichos/esguicho.svg";
import sprinklep from "../../assets/images/produtos/esguichos/sprinkle-pendente.svg";
import sprinkleup from "../../assets/images/produtos/esguichos/sprinkle-up.svg";

import abc4kgsup from "../../assets/images/produtos/extintores/abc4kg-suporte.svg";
import abc4kg from "../../assets/images/produtos/extintores/abc4kg.svg";
import abc6kg from "../../assets/images/produtos/extintores/abc6kg.svg";
import abc8kg from "../../assets/images/produtos/extintores/abc8kg.svg";
import abc9kg from "../../assets/images/produtos/extintores/abc9kg.svg";
import abc12kg from "../../assets/images/produtos/extintores/abc12kg.svg";
import abc20kg from "../../assets/images/produtos/extintores/abc20kg.svg";
import abc30kg from "../../assets/images/produtos/extintores/abc30kg.svg";
import abc50kg from "../../assets/images/produtos/extintores/abc50kg.svg";
import agua10l from "../../assets/images/produtos/extintores/agua10l.svg";
import agua75l from "../../assets/images/produtos/extintores/agua75l.svg";
import classek from "../../assets/images/produtos/extintores/classek.svg";
import co24kg from "../../assets/images/produtos/extintores/co2-4kg.svg";
import co26kg from "../../assets/images/produtos/extintores/co2-6kg.png";
import co26kgsup from "../../assets/images/produtos/extintores/co2-6kgsuporte.svg";
import espuma10l from "../../assets/images/produtos/extintores/espuma10l.svg";
import espuma50l6a from "../../assets/images/produtos/extintores/espuma50l-6a.svg";
import espuma50l10a from "../../assets/images/produtos/extintores/espuma50l-10a.svg";
import agua10lsup from "../../assets/images/produtos/extintores/extintor-agua10suporte.svg";

import fechaduracega from "../../assets/images/produtos/porta/fechaduracega.svg";
import fechaduratetra from "../../assets/images/produtos/porta/fechaduratetra.svg";
import portabatente from "../../assets/images/produtos/porta/portabatente.svg";
import portaindustrial from "../../assets/images/produtos/porta/portaindustrial.svg";
import portasimples from "../../assets/images/produtos/porta/portasimples.svg";

import registrobruto from "../../assets/images/produtos/registros/registrobruto.svg";
import registrogloboangular from "../../assets/images/produtos/registros/registrogloboangular.svg";
import registrogloboranhurado from "../../assets/images/produtos/registros/registrogloboranhurado.svg";
import valvula from "../../assets/images/produtos/registros/valvula.svg";

import aperteempurre from "../../assets/images/produtos/sinalizacao/aperteempurre.svg";
import c1 from "../../assets/images/produtos/sinalizacao/c1.svg";
import descedireita from "../../assets/images/produtos/sinalizacao/descedireita.svg";
import desceesquerda from "../../assets/images/produtos/sinalizacao/desceesquerda.svg";
import emcaso from "../../assets/images/produtos/sinalizacao/emcaso.svg";
import extintorcarreta from "../../assets/images/produtos/sinalizacao/extintorcarreta.svg";
import extintore5 from "../../assets/images/produtos/sinalizacao/extintore5.svg";
import hidrante from "../../assets/images/produtos/sinalizacao/hidrante.svg";
import lotacaom2 from "../../assets/images/produtos/sinalizacao/lotacaom2.svg";
import m1sistema from "../../assets/images/produtos/sinalizacao/m1sistema.svg";
import mangotinho from "../../assets/images/produtos/sinalizacao/mangotinho.svg";
import placaporta from "../../assets/images/produtos/sinalizacao/placaporta.svg";
import saidaacima from "../../assets/images/produtos/sinalizacao/saidaacima.png";
import saidadeemergencia from "../../assets/images/produtos/sinalizacao/saidadeemergencia.svg";
import saidadireita from "../../assets/images/produtos/sinalizacao/saidadireita.svg";
import saidadireita2 from "../../assets/images/produtos/sinalizacao/saidadireita2.svg";
import saidaesquerda from "../../assets/images/produtos/sinalizacao/saidaesquerda.svg";
import saidaesquerda2 from "../../assets/images/produtos/sinalizacao/saidaesquerda2.svg";
import saidapcd from "../../assets/images/produtos/sinalizacao/saidapcd.svg";
import saidas12 from "../../assets/images/produtos/sinalizacao/saidas12.svg";
import sirene from "../../assets/images/produtos/sinalizacao/sirene.svg";
import sobedireita from "../../assets/images/produtos/sinalizacao/sobedireita.svg";
import sobeesquerda from "../../assets/images/produtos/sinalizacao/sobeesquerda.svg";
import suportetripe from "../../assets/images/produtos/sinalizacao/suportetripe.svg";
import telefone from "../../assets/images/produtos/sinalizacao/telefone.svg";

import ProductCard from "../ProductCard/ProductCard.tsx";

// Defina uma interface para o tipo de dados do produto
interface Product {
  titulo: string;
  categoria: string;
  // preco: string;
  thumbnail: string;
}

export const ProductsPage: React.FC = () => {
  // Crie um array de produtos com os dados
  const products: Product[] = [
    {
      titulo: "Abrigo de Embutir",
      categoria: "Abrigos de Parede",
      thumbnail: abrigoembutir,
    },
    {
      titulo: "Abrigo de Sobrepor",
      categoria: "Abrigos de Parede",
      thumbnail: abrigosobrepor,
    },
    {
      titulo: "Abrigo de Sobrepor Duplo",
      categoria: "Abrigos de Parede",
      thumbnail: abrigosobreporduplo,
    },
    {
      titulo: "Barra Anti Pânico Dupla",
      categoria: "Acessórios",
      thumbnail: barradupla,
    },
    {
      titulo: "Barra Anti Pânico Simples",
      categoria: "Acessórios",
      thumbnail: barrasimples,
    },
    {
      titulo: "Chave Atorz Dupla Latão",
      categoria: "Acessórios",
      thumbnail: chave,
    },
    {
      titulo: "Mangueira de Incêndio",
      categoria: "Acessórios",
      thumbnail: mangueira,
    },
    {
      titulo: "Mão Francesa Reforçada",
      categoria: "Acessórios",
      thumbnail: maoreforcada,
    },
    {
      titulo: "Motobomba Padrão Incêndio",
      categoria: "Acessórios",
      thumbnail: motobomba,
    },
    {
      titulo: "Suporte de Parede para Extintor",
      categoria: "Acessórios",
      thumbnail: suporte,
    },
    {
      titulo: "Detector de Fumaça",
      categoria: "Acessórios",
      thumbnail: detector,
    },
    {
      titulo: "Luminária de Emergência Autônoma 30 Leds",
      categoria: "Acessórios",
      thumbnail: luminaria,
    },
    {
      titulo: "Botoeira 2 fios",
      categoria: "Botoeiras de Alarmes",
      thumbnail: botoeira2fios,
    },
    {
      titulo: "Botoeira 3 fios",
      categoria: "Botoeiras de Alarmes",
      thumbnail: botoeira3fios,
    },
    {
      titulo: "Central de Alarme",
      categoria: "Botoeiras de Alarmes",
      thumbnail: central,
    },
    {
      titulo: "Porta Chaves",
      categoria: "Botoeiras de Alarmes",
      thumbnail: portachave,
    },
    {
      titulo: "Sirene audio",
      categoria: "Botoeiras de Alarmes",
      thumbnail: sireneaudio,
    },
    {
      titulo: "Sirene audio visual",
      categoria: "Botoeiras de Alarmes",
      thumbnail: sireneaudiovisual,
    },
    {
      titulo: "Acionador de Bomba de Incêndio 3 Fios Quebra c/ Martelo",
      categoria: "Botoeiras de Alarmes",
      thumbnail: acionador,
    },
    {
      titulo: "Acionador de Bomba de Incêndio Convencional Quebra c/ Martelo",
      categoria: "Botoeiras de Alarmes",
      thumbnail: acionadormartelo,
    },
    {
      titulo: "Sirene Audio 24V Tipo Corneta Preta",
      categoria: "Botoeiras de Alarmes",
      thumbnail: sirenecornetapreta,
    },
    {
      titulo: "Sirene Audiovisual Bivolt Tipo Corneta Vermelha 12/24VCC",
      categoria: "Botoeiras de Alarmes",
      thumbnail: sirenecornetaaudiovisual,
    },
    {
      titulo:
        "Central Alarme de Incêndio Convencional 12V/12 Pontos c/ Bateria",
      categoria: "Botoeiras de Alarmes",
      thumbnail: centralconvencional,
    },
    {
      titulo: "Acoplamento Flexível",
      categoria: "Conexões",
      thumbnail: acoplamentoflexivel,
    },
    {
      titulo: "Acoplamento Redução",
      categoria: "Conexões",
      thumbnail: acoplamentoreducao,
    },
    {
      titulo: "Acoplamento Rígido",
      categoria: "Conexões",
      thumbnail: acoplamentorigido,
    },
    {
      titulo: "Adaptador Atorz",
      categoria: "Conexões",
      thumbnail: adaptador,
    },
    {
      titulo: "Cotovelo 45º Aço Galvanizado",
      categoria: "Conexões",
      thumbnail: cotovelo45,
    },
    {
      titulo: "Cotovelo 90º Aço Galvanizado",
      categoria: "Conexões",
      thumbnail: cotovelo90,
    },
    {
      titulo: "Cotovelo Ranhurado 45º",
      categoria: "Conexões",
      thumbnail: cotoveloranhurado45,
    },
    {
      titulo: "Cotovelo Ranhurado 90º",
      categoria: "Conexões",
      thumbnail: cotoveloranhurado90,
    },
    {
      titulo: "Cruzeta Ranhurado",
      categoria: "Conexões",
      thumbnail: cruzeta,
    },
    {
      titulo: "Flange Galvanizado",
      categoria: "Conexões",
      thumbnail: flange,
    },
    {
      titulo: "Luva Galvanizada",
      categoria: "Conexões",
      thumbnail: luva,
    },
    {
      titulo: "Niple Galvanizada",
      categoria: "Conexões",
      thumbnail: niple,
    },
    {
      titulo: "Redução Concêntrica",
      categoria: "Conexões",
      thumbnail: reducao,
    },
    {
      titulo: "Tampão Ranhurado",
      categoria: "Conexões",
      thumbnail: tampao,
    },
    {
      titulo: "T Galvanizado",
      categoria: "Conexões",
      thumbnail: tgalvanizado,
    },
    {
      titulo: "T Mecânico com Rosca",
      categoria: "Conexões",
      thumbnail: tmecanico,
    },
    {
      titulo: "T Ranhurado",
      categoria: "Conexões",
      thumbnail: tranhurado,
    },
    {
      titulo: "T Redução Ranhurado",
      categoria: "Conexões",
      thumbnail: treducao,
    },
    {
      titulo: "Tubo de Aço",
      categoria: "Conexões",
      thumbnail: tubo,
    },
    {
      titulo: "União AB Galvanizado",
      categoria: "Conexões",
      thumbnail: ab,
    },
    {
      titulo: "Esguicho Regulável Mangotinho",
      categoria: "Esguichos e Sprinklers",
      thumbnail: esguicho,
    },
    {
      titulo: "Sprinkler Pendente com Canopla",
      categoria: "Esguichos e Sprinklers",
      thumbnail: sprinklep,
    },
    {
      titulo: "Sprinkler Upright com Canopla",
      categoria: "Esguichos e Sprinklers",
      thumbnail: sprinkleup,
    },
    {
      titulo: "Água 10L (2A)",
      categoria: "Extintores",
      thumbnail: agua10l,
    },
    {
      titulo: "Água 10L (2A) c/ Suporte de Parede",
      categoria: "Extintores",
      thumbnail: agua10lsup,
    },
    {
      titulo: "Água 75L (10A)",
      categoria: "Extintores",
      thumbnail: agua75l,
    },
    {
      titulo: "Dióxido de Carbono (CO2) 4kg",
      categoria: "Extintores",
      thumbnail: co24kg,
    },
    {
      titulo: "Dióxido de Carbono (CO2) 6kg",
      categoria: "Extintores",
      thumbnail: co26kg,
    },
    {
      titulo: "Dióxido de Carbono (CO2) 6kg c/ Suporte de Parede",
      categoria: "Extintores",
      thumbnail: co26kgsup,
    },
    {
      titulo: "Espuma Mecânica 10L (2A-10B)",
      categoria: "Extintores",
      thumbnail: espuma10l,
    },
    {
      titulo: "Espuma Mecânica 50L (6A-40B)",
      categoria: "Extintores",
      thumbnail: espuma50l6a,
    },
    {
      titulo: "Espuma Mecânica 50L (10A-80B)",
      categoria: "Extintores",
      thumbnail: espuma50l10a,
    },
    {
      titulo: "Pó ABC 4kg (2A-20BC)",
      categoria: "Extintores",
      thumbnail: abc4kg,
    },
    {
      titulo: "Pó ABC 4kg (2A-20BC) c/ Suporte de Parede",
      categoria: "Extintores",
      thumbnail: abc4kgsup,
    },
    {
      titulo: "Pó ABC 6kg (4A-40BC)",
      categoria: "Extintores",
      thumbnail: abc6kg,
    },
    {
      titulo: "Pó ABC 8kg (4A-40BC)",
      categoria: "Extintores",
      thumbnail: abc8kg,
    },
    {
      titulo: "Pó ABC 9kg (6A-80BC)",
      categoria: "Extintores",
      thumbnail: abc9kg,
    },
    {
      titulo: "Pó ABC 12kg (6A-40BC)",
      categoria: "Extintores",
      thumbnail: abc12kg,
    },
    {
      titulo: "Pó ABC 20kg (10A-80BC)",
      categoria: "Extintores",
      thumbnail: abc20kg,
    },
    {
      titulo: "Pó ABC 30kg (10A-80BC)",
      categoria: "Extintores",
      thumbnail: abc30kg,
    },
    {
      titulo: "Pó ABC 50kg (20A-80BC)",
      categoria: "Extintores",
      thumbnail: abc50kg,
    },
    {
      titulo: "Pó BC 4kg (20BC)",
      categoria: "Extintores",
      thumbnail: abc4kg,
    },
    {
      titulo: "Pó BC 4kg (20BC) c/ Suporte de Parede",
      categoria: "Extintores",
      thumbnail: abc4kgsup,
    },
    {
      titulo: "Pó BC 6kg (20BC)",
      categoria: "Extintores",
      thumbnail: abc6kg,
    },
    {
      titulo: "Pó BC 8kg (40BC)",
      categoria: "Extintores",
      thumbnail: abc8kg,
    },
    {
      titulo: "Pó BC 12kg (40BC)",
      categoria: "Extintores",
      thumbnail: abc12kg,
    },
    {
      titulo: "Pó BC 20kg (40BC)",
      categoria: "Extintores",
      thumbnail: abc20kg,
    },
    {
      titulo: "Pó BC 20kg (80BC)",
      categoria: "Extintores",
      thumbnail: abc20kg,
    },
    {
      titulo: "Pó BC 30kg (80BC)",
      categoria: "Extintores",
      thumbnail: abc30kg,
    },
    {
      titulo: "Pó BC 50kg (80BC)",
      categoria: "Extintores",
      thumbnail: abc50kg,
    },
    {
      titulo: "Classe K 6L",
      categoria: "Extintores",
      thumbnail: classek,
    },
    {
      titulo: "Porta Corta Fogo Simples",
      categoria: "Porta Corta Fogo",
      thumbnail: portasimples,
    },
    {
      titulo: "Porta Corta Fogo Industrial",
      categoria: "Porta Corta Fogo",
      thumbnail: portaindustrial,
    },
    {
      titulo: "Fechadura Cega",
      categoria: "Porta Corta Fogo",
      thumbnail: fechaduracega,
    },
    {
      titulo: "Fechadura com Chave Tetra",
      categoria: "Porta Corta Fogo",
      thumbnail: fechaduratetra,
    },
    {
      titulo: "Porta com Batente e Maçaneta",
      categoria: "Porta Corta Fogo",
      thumbnail: portabatente,
    },
    {
      titulo: "Registro de Gaveta Bruto",
      categoria: "Registros e Válvulas",
      thumbnail: registrobruto,
    },
    {
      titulo: "Registro Globo Angular Predial",
      categoria: "Registros e Válvulas",
      thumbnail: registrogloboangular,
    },
    {
      titulo: "Registro Globo Ranhurado",
      categoria: "Registros e Válvulas",
      thumbnail: registrogloboranhurado,
    },
    {
      titulo: "Válvula de Retenção Horizontal",
      categoria: "Registros e Válvulas",
      thumbnail: valvula,
    },
    {
      titulo: "Placa Aperte/Empurre",
      categoria: "Sinalização",
      thumbnail: aperteempurre,
    },
    {
      titulo: "Placa Em caso de incêndio",
      categoria: "Sinalização",
      thumbnail: emcaso,
    },
    {
      titulo: "Placa Escada Desce Direita",
      categoria: "Sinalização",
      thumbnail: descedireita,
    },
    {
      titulo: "Placa Escada Desce Esquerda",
      categoria: "Sinalização",
      thumbnail: desceesquerda,
    },
    {
      titulo: "Placa Escada Subindo Direita",
      categoria: "Sinalização",
      thumbnail: sobedireita,
    },
    {
      titulo: "Placa Escada Subindo Esquerda",
      categoria: "Sinalização",
      thumbnail: sobeesquerda,
    },
    {
      titulo: "Placa Extintor Carreta",
      categoria: "Sinalização",
      thumbnail: extintorcarreta,
    },
    {
      titulo: "Placa Extintor E5",
      categoria: "Sinalização",
      thumbnail: extintore5,
    },
    {
      titulo: "Placa Hidrante",
      categoria: "Sinalização",
      thumbnail: hidrante,
    },
    {
      titulo: "Placa Mangotinho",
      categoria: "Sinalização",
      thumbnail: mangotinho,
    },
    {
      titulo: "Placa Porta Corta Fogo",
      categoria: "Sinalização",
      thumbnail: placaporta,
    },
    {
      titulo: "Placa Rota de Saída Direita",
      categoria: "Sinalização",
      thumbnail: saidadireita,
    },
    {
      titulo: "Placa Rota de Saída Esquerda",
      categoria: "Sinalização",
      thumbnail: saidaesquerda,
    },
    {
      titulo: "Placa Saída Acima",
      categoria: "Sinalização",
      thumbnail: saidaacima,
    },
    {
      titulo: "Placa Saída de Emergência Deficiente",
      categoria: "Sinalização",
      thumbnail: saidapcd,
    },
    {
      titulo: "Placa Saída de Emergência",
      categoria: "Sinalização",
      thumbnail: saidadeemergencia,
    },
    {
      titulo: "Placa Saída S12",
      categoria: "Sinalização",
      thumbnail: saidas12,
    },
    {
      titulo: "Placa Saída Seta Direita",
      categoria: "Sinalização",
      thumbnail: saidadireita2,
    },
    {
      titulo: "Placa Saída Seta Esquerda",
      categoria: "Sinalização",
      thumbnail: saidaesquerda2,
    },
    {
      titulo: "Placa Sirene",
      categoria: "Sinalização",
      thumbnail: sirene,
    },
    {
      titulo: "Placa Telefone Emergência",
      categoria: "Sinalização",
      thumbnail: telefone,
    },
    {
      titulo: "Suporte Tripé para Extintor",
      categoria: "Sinalização",
      thumbnail: suportetripe,
    },
    {
      titulo: "Placa M2 Lotação Máxima (Descrição Preencher)",
      categoria: "Sinalização",
      thumbnail: lotacaom2,
    },
    {
      titulo:
        "Placa Fotoluminescente M1 Sistema de Segurança Contra Incêndio (Preencher) 45x45cm",
      categoria: "Sinalização",
      thumbnail: m1sistema,
    },
    {
      titulo: "Placa Fotoluminescente C1 20x07cm",
      categoria: "Sinalização",
      thumbnail: c1,
    },
  ];

  // Estado para a categoria filtrada
  const [filteredCategory, setFilteredCategory] = useState<string>("Todos");
  // Estado para armazenar o texto de pesquisa
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Função para filtrar os produtos com base na categoria selecionada e no texto de pesquisa
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch =
      filteredCategory === "Todos" || product.categoria === filteredCategory;
    const isSearchMatch =
      searchQuery.length < 3 ||
      product.titulo.toLowerCase().includes(searchQuery.toLowerCase());

    return isCategoryMatch && isSearchMatch;
  });

  return (
    <>
      <section className={styles.produto}>
        <div className={styles.titulos}>
          <h3>Produtos / {filteredCategory}</h3>
          <h2>
            {filteredCategory === "Todos"
              ? "Todas as Categorias"
              : filteredCategory}
          </h2>
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Pesquisar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="#aa1919"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </button>
        </div>

        <div className={styles.categoryFilter}>
          <h3>Filtrar:</h3>
          <select
            onChange={(e) => setFilteredCategory(e.target.value)}
            value={filteredCategory}
          >
            <option value="Todos">Todos</option>
            <option value="Abrigos de Parede">Abrigos de Parede</option>
            <option value="Acessórios">Acessórios</option>
            <option value="Botoeiras de Alarmes">Botoeiras de Alarmes</option>
            <option value="Conexões">Conexões</option>
            <option value="Esguichos e Sprinklers">
              Esguichos e Sprinklers
            </option>
            <option value="Extintores">Extintores</option>
            <option value="Porta Corta Fogo">Porta Corta Fogo</option>
            <option value="Registros e Válvulas">Registros e Válvulas</option>
            <option value="Sinalização">Sinalização</option>
          </select>
        </div>
      </section>

      <section className={styles.mainProd}>
        <div className={styles.ProdCards}>
          {/* Mapeia o array de produtos filtrados e exibe os cartões */}
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              titulo={product.titulo}
              categoria={product.categoria}
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
