/* ========== DADOS DAS REGIÕES CEREBRAIS ========== */
var regioes = [
  {
    nome: "Córtex Pré-Frontal", sigla: "CPF", cor: "#5b52ff",
    descricao: "Região mais anterior do lobo frontal, essencial para funções cognitivas superiores. É a última área do cérebro a amadurecer completamente (por volta dos 25 anos).",
    funcoes: "Planejamento, tomada de decisões, controle de impulsos, personalidade, julgamento moral, atenção sustentada, memória de trabalho e raciocínio abstrato.",
    rotY: -18, rotX: 8,
    cx: 0.06, cy: 0.16, cz: 0.15, raio: 0.12,
    bordaMin: 0.70, ganhoCor: 1.00,
    focoX: 0.00, focoY: 0.03, focoZ: 0.00, zoom: 1.00
  },
  {
    nome: "Córtex Motor", sigla: "CM", cor: "#ff2db8",
    descricao: "Faixa localizada no giro pré-central do lobo frontal, responsável pelo controle voluntário dos movimentos do corpo.",
    funcoes: "Movimentos voluntários dos músculos esqueléticos, coordenação motora fina, planejamento motor e execução de sequências motoras complexas.",
    rotY: -8, rotX: -34,
    cx: 0.03, cy: 0.15, cz: 0.03, raio: 0.10,
    bordaMin: 0.60, ganhoCor: 1.00,
    focoX: 0.00, focoY: -0.01, focoZ: 0.00, zoom: 1.03
  },
  {
    nome: "Lobo Parietal", sigla: "LP", cor: "#00e87a",
    descricao: "Localizado na parte superior e posterior do cérebro, atrás do sulco central. Integra informações sensoriais de várias modalidades.",
    funcoes: "Percepção sensorial (tato, dor, temperatura, pressão), orientação espacial, integração sensorial, consciência corporal, cálculo e leitura.",
    rotY: 158, rotX: -18,
    cx: -0.04, cy: 0.13, cz: -0.03, raio: 0.12,
    bordaMin: 0.60, ganhoCor: 1.00,
    focoX: 0.00, focoY: -0.01, focoZ: 0.00, zoom: 1.03
  },
  {
    nome: "Lobo Temporal", sigla: "LT", cor: "#ffe000",
    descricao: "Situado nas laterais do cérebro, abaixo da fissura lateral (de Sylvius). Contém áreas fundamentais para linguagem e memória.",
    funcoes: "Audição e processamento auditivo, compreensão da linguagem (área de Wernicke), memória de longo prazo, reconhecimento facial e processamento emocional.",
    rotY: 76, rotX: 7,
    cx: 0.14, cy: -0.04, cz: -0.01, raio: 0.11,
    bordaMin: 0.65, ganhoCor: 1.05,
    focoX: -0.01, focoY: 0.01, focoZ: 0.01, zoom: 1.08
  },
  {
    nome: "Lobo Occipital", sigla: "LO", cor: "#ff3333",
    descricao: "Região mais posterior do cérebro, contém o córtex visual primário (V1) e as áreas visuais associativas.",
    funcoes: "Processamento visual primário, percepção de cores, formas, movimentos, profundidade, reconhecimento visual de objetos e leitura.",
    rotY: 180, rotX: 2,
    cx: -0.12, cy: 0.06, cz: -0.10, raio: 0.11,
    bordaMin: 0.60, ganhoCor: 1.00,
    focoX: 0.00, focoY: 0.00, focoZ: 0.01, zoom: 1.04
  },
  {
    nome: "Cerebelo", sigla: "CB", cor: "#00e5b8",
    descricao: "Estrutura localizada na parte inferior e posterior do encéfalo, atrás do tronco encefálico. Contém mais neurônios que o resto do cérebro.",
    funcoes: "Coordenação dos movimentos voluntários, equilíbrio, postura, aprendizagem motora, precisão dos movimentos e algumas funções cognitivas.",
    rotY: 8, rotX: 76,
    cx: 0.00, cy: -0.14, cz: -0.12, raio: 0.055,
    bordaMin: 0.78, ganhoCor: 1.15,
    focoX: 0.00, focoY: 0.045, focoZ: 0.020, zoom: 1.18,
    usaMarcador: true,
    mx: 0.00, my: -0.11, mz: -0.18, marcadorEscala: 1.1
  },
  {
    nome: "Tronco Encefálico", sigla: "TE", cor: "#ff7800",
    descricao: "Conecta o cérebro à medula espinhal. Composto por mesencéfalo, ponte (protuberância) e bulbo (medula oblonga).",
    funcoes: "Controle da respiração, frequência cardíaca, pressão arterial, ciclo sono-vigília, reflexos vitais (tosse, espirro, deglutição) e condução de sinais entre cérebro e corpo.",
    rotY: 0, rotX: 88,
    cx: 0.00, cy: -0.16, cz: -0.02, raio: 0.035,
    bordaMin: 0.82, ganhoCor: 1.18,
    focoX: 0.00, focoY: 0.055, focoZ: 0.025, zoom: 1.22,
    usaMarcador: true,
    mx: 0.00, my: -0.10, mz: -0.06, marcadorEscala: 1.15
  },
  {
    nome: "Corpo Caloso", sigla: "CC", cor: "#8b80ff",
    descricao: "Grande feixe de fibras nervosas (comissura) que conecta os dois hemisférios cerebrais, permitindo comunicação entre eles. Nesta visualização, a marcação representa uma aproximação didática da sua posição interna.",
    funcoes: "Comunicação inter-hemisférica, coordenação bilateral, transferência de informações motoras, sensoriais e cognitivas entre os lados esquerdo e direito do cérebro.",
    rotY: 45, rotX: -40,
    cx: 0.00, cy: 0.03, cz: 0.00, raio: 0.06,
    bordaMin: 0.75, ganhoCor: 1.12,
    focoX: 0.00, focoY: 0.030, focoZ: 0.000, zoom: 1.18,
    usaMarcador: true,
    mx: 0.00, my: 0.12, mz: 0.00, marcadorEscala: 1.0
  }
];

/* ========== COR BASE DO CÉREBRO (rosa) ========== */
var BRAIN_R = 0xe8 / 255, BRAIN_G = 0xb4 / 255, BRAIN_B = 0xa0 / 255;

/* ========== REFERÊNCIAS GLOBAIS ========== */
var brainEl = document.getElementById("brainModel3D");
var brainRoot = document.getElementById("brainRoot");
var infoPanel = document.getElementById("infoPanel");
var btnContainer = document.getElementById("regionBtns");
var regiaoAtiva = -1;
var brainReady = false;
var baseBrainScale = 1;
var scaleAtual = 1;
var scaleAlvo = 1;
var baseRootPos = { x: 0, y: 0.05, z: 0 };
var posAtual = { x: 0, y: 0.05, z: 0 };
var posAlvo = { x: 0, y: 0.05, z: 0 };
var marcadorGrupo = null;
var marcadorPonto = null;
var marcadorAro = null;
var marcadorLinha = null;

/* ========== SISTEMA DE ROTAÇÃO MANUAL ========== */
var rotAtual = { x: 0, y: 0 };
var rotAlvo = null;
var autoRotar = true;
var pulsePhase = 0;
var pulseAtivo = false;

function lerpAngle(a, b, t) {
  var diff = b - a;
  while (diff > 180) diff -= 360;
  while (diff < -180) diff += 360;
  return a + diff * t;
}

/* ========== LOOP PRINCIPAL ========== */
function loopPrincipal() {
  var obj = brainRoot.object3D;
  if (!obj) { requestAnimationFrame(loopPrincipal); return; }

  if (autoRotar) {
    rotAtual.y += 0.25;
    if (rotAtual.y > 360) rotAtual.y -= 360;
    rotAtual.x += (0 - rotAtual.x) * 0.05;
  } else if (rotAlvo) {
    rotAtual.x = lerpAngle(rotAtual.x, rotAlvo.x, 0.07);
    rotAtual.y = lerpAngle(rotAtual.y, rotAlvo.y, 0.07);
  }

  obj.rotation.set(
    THREE.MathUtils.degToRad(rotAtual.x),
    THREE.MathUtils.degToRad(rotAtual.y),
    0
  );

  posAtual.x += (posAlvo.x - posAtual.x) * 0.10;
  posAtual.y += (posAlvo.y - posAtual.y) * 0.10;
  posAtual.z += (posAlvo.z - posAtual.z) * 0.10;
  obj.position.set(posAtual.x, posAtual.y, posAtual.z);

  scaleAtual += (scaleAlvo - scaleAtual) * 0.10;
  brainEl.object3D.scale.set(scaleAtual, scaleAtual, scaleAtual);

  if (marcadorGrupo && marcadorGrupo.visible) {
    var pulseMarcador = 1.0 + 0.18 * Math.sin(pulsePhase * 2.0);
    if (marcadorPonto) marcadorPonto.scale.setScalar(pulseMarcador);
    if (marcadorAro) marcadorAro.rotation.z += 0.02;
  }

  // Pulsação suave da cor (re-pinta com intensidade variável)
  if (pulseAtivo && brainReady && regiaoAtiva >= 0) {
    pulsePhase += 0.03;
    var intensity = 0.85 + 0.15 * Math.sin(pulsePhase);
    pintarRegiao(regiaoAtiva, intensity);
  }

  requestAnimationFrame(loopPrincipal);
}
requestAnimationFrame(loopPrincipal);

/* ========== MODELO: CENTRALIZAR, ESCALAR, VERTEX COLORS ========== */
brainEl.addEventListener("model-loaded", function() {
  var mesh = brainEl.getObject3D("mesh");
  if (!mesh) return;

  // Adicionar vertex colors ANTES de criar o material
  // (senão o shader é compilado sem suporte a vertex colors)
  mesh.traverse(function(node) {
    if (node.isMesh) {
      var geo = node.geometry;
      var count = geo.attributes.position.count;
      var colors = new Float32Array(count * 3);
      for (var j = 0; j < count; j++) {
        colors[j * 3] = BRAIN_R;
        colors[j * 3 + 1] = BRAIN_G;
        colors[j * 3 + 2] = BRAIN_B;
      }
      geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      node.material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: true,
        specular: 0x666666,
        shininess: 30,
        emissive: 0x222222,
        emissiveIntensity: 0.3,
        flatShading: false
      });
      node.material.needsUpdate = true;
    }
  });

  // Centralizar e escalar
  var box = new THREE.Box3().setFromObject(mesh);
  var size = new THREE.Vector3();
  var center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);
  mesh.position.sub(center);

  var maxDim = Math.max(size.x, size.y, size.z);
  var s = 1.15 / maxDim;
  brainEl.setAttribute("scale", s + " " + s + " " + s);
  baseBrainScale = s;
  scaleAtual = s;
  scaleAlvo = s;
  brainRoot.setAttribute("position", baseRootPos.x + " " + baseRootPos.y + " " + baseRootPos.z);
  posAtual = { x: baseRootPos.x, y: baseRootPos.y, z: baseRootPos.z };
  posAlvo = { x: baseRootPos.x, y: baseRootPos.y, z: baseRootPos.z };

  // Aguardar matrizes atualizarem e preparar vertex colors
  setTimeout(function() {
    prepararVertexColors();
    criarMarcadorDidatico();
    brainReady = true;
    document.getElementById("hint").textContent = "Cérebro carregado!";
    setTimeout(function() {
      document.getElementById("hint").textContent = "Toque nos pontos coloridos ou use os botões";
    }, 2000);
  }, 200);
});

/* ========== PREPARAR VERTEX COLORS ========== */
var vertexBounds = null;

function prepararVertexColors() {
  var mesh = brainEl.getObject3D("mesh");
  if (!mesh) return;

  // Calcular a matriz de transformação de cada mesh para o espaço local do brainRoot
  brainRoot.object3D.updateMatrixWorld(true);
  var rootMatInv = new THREE.Matrix4().copy(brainRoot.object3D.matrixWorld).invert();

  var minX = Infinity, minY = Infinity, minZ = Infinity;
  var maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  var totalVerts = 0;

  mesh.traverse(function(node) {
    if (!node.isMesh) return;
    node.updateMatrixWorld(true);

    var geo = node.geometry;
    var pos = geo.attributes.position;
    var count = pos.count;
    totalVerts += count;

    // Matriz: vértice local → brainRoot local
    var toRoot = new THREE.Matrix4().multiplyMatrices(rootMatInv, node.matrixWorld);

    // Guardar posições dos vértices no espaço do brainRoot
    var rp = new Float32Array(count * 3);
    var vec = new THREE.Vector3();
    for (var i = 0; i < count; i++) {
      vec.fromBufferAttribute(pos, i);
      vec.applyMatrix4(toRoot);
      rp[i * 3] = vec.x;
      rp[i * 3 + 1] = vec.y;
      rp[i * 3 + 2] = vec.z;
      if (vec.x < minX) minX = vec.x;
      if (vec.y < minY) minY = vec.y;
      if (vec.z < minZ) minZ = vec.z;
      if (vec.x > maxX) maxX = vec.x;
      if (vec.y > maxY) maxY = vec.y;
      if (vec.z > maxZ) maxZ = vec.z;
    }
    node.userData.rootPositions = rp;
    node.material.needsUpdate = true;
  });

  vertexBounds = { minX: minX, minY: minY, minZ: minZ, maxX: maxX, maxY: maxY, maxZ: maxZ };

  // Auto-ajustar centros das regiões para mapear no espaço real dos vértices
  // Os centros originais foram definidos para o range -0.15..0.15 aprox
  // Remapear para o range real dos vértices
  var oldMin = -0.15, oldMax = 0.15;
  var rangeX = maxX - minX, rangeY = maxY - minY, rangeZ = maxZ - minZ;

  for (var r = 0; r < regioes.length; r++) {
    var reg = regioes[r];
    // Normalizar do range antigo (0 .. 1) e remapear para range real
    reg._cx = minX + ((reg.cx - oldMin) / (oldMax - oldMin)) * rangeX;
    reg._cy = minY + ((reg.cy - oldMin) / (oldMax - oldMin)) * rangeY;
    reg._cz = minZ + ((reg.cz - oldMin) / (oldMax - oldMin)) * rangeZ;
    // Raio proporcional ao tamanho real
    var avgRange = (rangeX + rangeY + rangeZ) / 3;
    reg._raio = reg.raio * (avgRange / (oldMax - oldMin));
    if (reg.mx !== undefined) reg._mx = minX + ((reg.mx - oldMin) / (oldMax - oldMin)) * rangeX;
    if (reg.my !== undefined) reg._my = minY + ((reg.my - oldMin) / (oldMax - oldMin)) * rangeY;
    if (reg.mz !== undefined) reg._mz = minZ + ((reg.mz - oldMin) / (oldMax - oldMin)) * rangeZ;
  }

  console.log("Vertex bounds:", vertexBounds, "Total verts:", totalVerts);
  console.log("Regiões remapeadas:", regioes.map(function(r) { return { nome: r.sigla, cx: r._cx, cy: r._cy, cz: r._cz, raio: r._raio }; }));
}

function criarMarcadorDidatico() {
  if (marcadorGrupo || !brainRoot.object3D) return;

  marcadorGrupo = new THREE.Group();
  marcadorGrupo.visible = false;

  marcadorLinha = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -0.05, 0),
      new THREE.Vector3(0, 0.05, 0)
    ]),
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95 })
  );

  marcadorPonto = new THREE.Mesh(
    new THREE.SphereGeometry(0.012, 20, 20),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  marcadorPonto.position.y = 0.05;

  marcadorAro = new THREE.Mesh(
    new THREE.TorusGeometry(0.022, 0.004, 12, 32),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })
  );
  marcadorAro.position.y = 0.05;
  marcadorAro.rotation.x = Math.PI / 2;

  marcadorGrupo.add(marcadorLinha);
  marcadorGrupo.add(marcadorPonto);
  marcadorGrupo.add(marcadorAro);
  brainRoot.object3D.add(marcadorGrupo);
}

function atualizarMarcadorDidatico(regiao) {
  if (!marcadorGrupo || !regiao || !regiao.usaMarcador) {
    if (marcadorGrupo) marcadorGrupo.visible = false;
    return;
  }

  var mx = regiao._mx !== undefined ? regiao._mx : regiao.mx;
  var my = regiao._my !== undefined ? regiao._my : regiao.my;
  var mz = regiao._mz !== undefined ? regiao._mz : regiao.mz;
  var escala = regiao.marcadorEscala || 1.0;
  var cor = new THREE.Color(regiao.cor);

  marcadorGrupo.visible = true;
  marcadorGrupo.position.set(mx, my, mz);
  marcadorGrupo.scale.setScalar(escala);
  marcadorLinha.material.color.copy(cor);
  marcadorPonto.material.color.copy(cor);
  marcadorAro.material.color.copy(cor);
}

/* ========== PINTAR REGIÃO NO MESH ========== */
function pintarRegiao(idx, intensity) {
  if (!brainReady) return;
  var r = regioes[idx];
  var mesh = brainEl.getObject3D("mesh");
  if (!mesh) return;

  var regColor = new THREE.Color(r.cor);
  // Usar coordenadas remapeadas (_cx, _cy, _cz, _raio)
  var cx = r._cx !== undefined ? r._cx : r.cx;
  var cy = r._cy !== undefined ? r._cy : r.cy;
  var cz = r._cz !== undefined ? r._cz : r.cz;
  var raio = r._raio !== undefined ? r._raio : r.raio;
  var bordaMin = r.bordaMin !== undefined ? r.bordaMin : 0.60;
  var ganhoCor = r.ganhoCor !== undefined ? r.ganhoCor : 1.00;

  mesh.traverse(function(node) {
    if (!node.isMesh || !node.userData.rootPositions) return;
    var rp = node.userData.rootPositions;
    var colors = node.geometry.attributes.color;
    var count = colors.count;

    for (var i = 0; i < count; i++) {
      var dx = rp[i * 3] - cx;
      var dy = rp[i * 3 + 1] - cy;
      var dz = rp[i * 3 + 2] - cz;
      var dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < raio) {
        // Gradiente forte com reforço por região para estruturas pequenas.
        var t = 1.0 - (dist / raio);
        t = bordaMin + (1.0 - bordaMin) * t;
        t = Math.min(1.0, t * intensity * ganhoCor);
        colors.setXYZ(i,
          regColor.r * t + BRAIN_R * (1.0 - t),
          regColor.g * t + BRAIN_G * (1.0 - t),
          regColor.b * t + BRAIN_B * (1.0 - t)
        );
      } else {
        colors.setXYZ(i, BRAIN_R, BRAIN_G, BRAIN_B);
      }
    }
    colors.needsUpdate = true;
  });
}

/* ========== RESTAURAR COR ORIGINAL ========== */
function restaurarCores() {
  if (!brainReady) return;
  var mesh = brainEl.getObject3D("mesh");
  if (!mesh) return;

  mesh.traverse(function(node) {
    if (!node.isMesh || !node.geometry.attributes.color) return;
    var colors = node.geometry.attributes.color;
    var count = colors.count;
    for (var i = 0; i < count; i++) {
      colors.setXYZ(i, BRAIN_R, BRAIN_G, BRAIN_B);
    }
    colors.needsUpdate = true;
  });
}

/* ========== UI: BOTÕES DAS REGIÕES ========== */
regioes.forEach(function(r, i) {
  var btn = document.createElement("button");
  btn.className = "rbtn";
  btn.dataset.idx = i;
  btn.innerHTML = '<span class="cdot" style="background:' + r.cor + '; color:' + r.cor + '"></span>' + r.nome;
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    selecionarRegiao(i);
  });
  btnContainer.appendChild(btn);
});

/* ========== FUNÇÃO PRINCIPAL: SELECIONAR REGIÃO ========== */
function selecionarRegiao(idx) {
  var r = regioes[idx];
  if (!r) return;
  regiaoAtiva = idx;

  // 1. Girar cérebro para mostrar a região
  autoRotar = false;
  rotAlvo = { x: r.rotX, y: r.rotY };
  posAlvo = {
    x: baseRootPos.x + (r.focoX || 0),
    y: baseRootPos.y + (r.focoY || 0),
    z: baseRootPos.z + (r.focoZ || 0)
  };
  scaleAlvo = baseBrainScale * (r.zoom || 1.0);

  // 2. Preencher painel de info
  var panelDot = infoPanel.querySelector(".idot");
  panelDot.style.background = r.cor;
  panelDot.style.boxShadow = "0 0 12px " + r.cor;
  infoPanel.querySelector(".ntext").textContent = r.nome;
  infoPanel.querySelector(".ntext").style.color = r.cor;
  infoPanel.querySelector(".rdesc").textContent = r.descricao;
  infoPanel.querySelector(".rfunc").innerHTML = "<strong>Funções:</strong> " + r.funcoes;
  infoPanel.classList.add("show");

  // 3. Botão ativo
  document.querySelectorAll(".rbtn").forEach(function(b) {
    b.classList.toggle("active", parseInt(b.dataset.idx) === idx);
  });

  // 4. PINTAR A REGIÃO DIRETAMENTE NO CÉREBRO
  pintarRegiao(idx, 1.0);
  pulseAtivo = true;
  pulsePhase = 0;
  atualizarMarcadorDidatico(r);

  // 5. Destacar hotspot
  document.querySelectorAll(".hotspot").forEach(function(el) {
    var rIdx = parseInt(el.getAttribute("data-region"));
    var m = el.getObject3D("mesh");
    if (rIdx === idx) {
      el.setAttribute("radius", "0.035");
      if (m && m.material) {
        m.material.opacity = 1.0;
        m.material.emissiveIntensity = 1.5;
        m.material.needsUpdate = true;
      }
      el.setAttribute("animation", "property: scale; to: 1.6 1.6 1.6; dir: alternate; loop: true; dur: 400; easing: easeInOutSine");
    } else {
      el.setAttribute("radius", "0.012");
      if (m && m.material) {
        m.material.opacity = 0.2;
        m.material.emissiveIntensity = 0.2;
        m.material.needsUpdate = true;
      }
      el.setAttribute("animation", "property: scale; to: 1.05 1.05 1.05; dir: alternate; loop: true; dur: 1200; easing: easeInOutSine");
    }
  });
}

/* ========== FECHAR PAINEL ========== */
function fecharInfo() {
  infoPanel.classList.remove("show");
  regiaoAtiva = -1;
  pulseAtivo = false;
  document.querySelectorAll(".rbtn").forEach(function(b) { b.classList.remove("active"); });

  // Restaura autoRotar apenas se não estiver tocando
  if (!isTouching) {
    autoRotar = true;
    rotAlvo = null;
  }
  posAlvo = { x: baseRootPos.x, y: baseRootPos.y, z: baseRootPos.z };
  scaleAlvo = baseBrainScale;
  atualizarMarcadorDidatico(null);

  // Restaurar cor original do cérebro
  restaurarCores();

  // Restaurar hotspots
  document.querySelectorAll(".hotspot").forEach(function(el) {
    el.setAttribute("radius", "0.026");
    var m = el.getObject3D("mesh");
    if (m && m.material) {
      m.material.opacity = 1.0;
      m.material.emissiveIntensity = 1.2;
      m.material.needsUpdate = true;
    }
    var dur = 700 + Math.random() * 400;
    el.setAttribute("animation", "property: scale; to: 1.45 1.45 1.45; dir: alternate; loop: true; dur: " + dur + "; easing: easeInOutSine");
  });
}

document.getElementById("closeBtn").addEventListener("click", function(e) {
  e.preventDefault();
  e.stopPropagation();
  fecharInfo();
});

/* ========== CONTROLE POR TOQUE ========== */
var touchStart = { x: 0, y: 0 };
var isTouching = false;
var touchSensitivity = 0.5; // Ajuste para sentir a rotação mais ou menos

document.addEventListener("touchstart", function(e) {
  if (e.touches.length === 1) {
    var t = e.touches[0];
    touchStart.x = t.clientX;
    touchStart.y = t.clientY;
    isTouching = true;
    autoRotar = false; // Desabilita rotação automática ao tocar
  }
}, { passive: true });

document.addEventListener("touchmove", function(e) {
  if (isTouching && e.touches.length === 1) {
    var t = e.touches[0];
    var deltaX = (t.clientX - touchStart.x) * touchSensitivity;
    var deltaY = (t.clientY - touchStart.y) * touchSensitivity;

    // Atualiza rotação em tempo real
    rotAtual.y += deltaX * 0.3;
    rotAtual.x -= deltaY * 0.3;

    // Limita rotação X para não virar a cabeça completamente
    rotAtual.x = Math.max(-90, Math.min(90, rotAtual.x));

    // Normaliza Y entre 0-360
    if (rotAtual.y > 360) rotAtual.y -= 360;
    if (rotAtual.y < 0) rotAtual.y += 360;

    // Atualiza posição inicial para próximo movimento
    touchStart.x = t.clientX;
    touchStart.y = t.clientY;

    // Cancela qualquer rotação alvo (sai do modo manual)
    rotAlvo = null;
  }
}, { passive: true });

document.addEventListener("touchend", function(e) {
  if (isTouching) {
    isTouching = false;
    // Retoma rotação automática se nenhuma região estiver ativa
    if (regiaoAtiva < 0) {
      autoRotar = true;
      rotAlvo = null;
    }
  }
}, { passive: true });

/* ========== RAYCASTER ========== */
var sceneEl = document.querySelector("a-scene");

sceneEl.addEventListener("loaded", function() {
  var canvas = sceneEl.canvas;
  if (!canvas) return;

  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2();

  function pick(clientX, clientY) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

    var cam = sceneEl.camera;
    if (!cam) return;
    raycaster.setFromCamera(mouse, cam);

    var hotspotEls = Array.from(document.querySelectorAll(".hotspot"));
    var objects = [];
    hotspotEls.forEach(function(el) {
      if (el.object3D) objects.push(el.object3D);
    });
    var hits = raycaster.intersectObjects(objects, true);

    if (hits.length > 0) {
      var obj = hits[0].object;
      while (obj && !obj.el) obj = obj.parent;
      if (obj && obj.el) {
        var idx = parseInt(obj.el.getAttribute("data-region"));
        if (!isNaN(idx)) selecionarRegiao(idx);
      }
    }
  }

  canvas.addEventListener("click", function(e) { pick(e.clientX, e.clientY); });
  canvas.addEventListener("touchend", function(e) {
    if (e.changedTouches && e.changedTouches.length === 1 && !isTouching) {
      var t = e.changedTouches[0];
      pick(t.clientX, t.clientY);
    }
  }, { passive: true });
});
