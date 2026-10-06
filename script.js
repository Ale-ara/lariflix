document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     INTRO + SOM INICIAL + MÚSICA DE FUNDO
  ===================================================== */
  const intro = document.getElementById("intro");
  const startBtn = document.getElementById("startBtn");
  const introSound = document.getElementById("introSound");
  const ambientSound = document.getElementById("ambientSound");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startBtn.style.display = "none";
      intro.classList.add("playing");

      if (introSound) {
        introSound.currentTime = 0;
        introSound.play().catch(() => {});
      }

      setTimeout(() => {
        intro.style.opacity = "0";
      }, 3500);

      setTimeout(() => {
        intro.style.display = "none";
        if (ambientSound) {
          ambientSound.volume = 0.35;
          ambientSound.play().catch(() => {});
        }
      }, 4500);
    });
  }

  /* =====================================================
     FAVORITO ⭐
  ===================================================== */
  const favBtn = document.getElementById("btnFavorito");

  if (favBtn) {
    if (localStorage.getItem("lariflix_fav") === "true") {
      favBtn.classList.add("active");
      favBtn.innerHTML = "⭐ Favorito";
    }

    favBtn.addEventListener("click", () => {
      favBtn.classList.toggle("active");
      const ativo = favBtn.classList.contains("active");
      localStorage.setItem("lariflix_fav", ativo);
      favBtn.innerHTML = ativo ? "⭐ Favorito" : "☆ Favorito";
    });
  }

  /* =====================================================
     CONTINUAR ▶
  ===================================================== */
  const btnContinuar = document.getElementById("btnContinuar");
  if (btnContinuar) {
    btnContinuar.addEventListener("click", () => {
      document.getElementById("episodios")
        .scrollIntoView({ behavior: "smooth" });
    });
  }

  /* =====================================================
     HISTÓRIAS DOS EPISÓDIOS (ARQUIVOS NA RAIZ)
  ===================================================== */
  const storyEp1 = [
    {
      title: "Como tudo começou",
      img: "ep1-1.jpg",
      text: "Foi assim que tudo começou: com mensagens simples e aquela enrolação para eu aparecer na igreja da dona Larissa.",
      note: "Foi aqui que as primeiras conversas começaram a virar a nossa história."
    },
    {
      title: "O time",
      img: "ep1-2.jpg",
      text: "No meio das primeiras conversas, você queria descobrir logo para qual time eu torcia. Era uma pergunta simples, mas já mostrava que a gente queria saber mais um sobre o outro.",
      note: "Um detalhe pequeno que hoje faz parte de uma lembrança enorme."
    },
    {
      title: "Quando percebi",
      img: null,
      text: "Sem perceber, eu já estava completamente apaixonado. Só queria continuar conversando com você e encontrar qualquer desculpa para estar por perto.",
      note: "Sem perceber, conversar com você virou a melhor parte dos meus dias."
    },
    {
      title: "E hoje",
      img: null,
      text: "O que começou sem nenhuma pretensão virou conexão, carinho e amor. A partir dali, nada mais foi igual.",
      note: "O começo foi leve. O sentimento ficou cada vez mais verdadeiro."
    }
  ];

  const storyEp2 = [
    {
      title: "Mais próximos",
      img: "ep2-1.jpg",
      text: "Conhecer sua família foi um privilégio. Naquele momento, minha cabeça já começava a imaginar um futuro ao seu lado.",
      note: "Foram momentos simples, mas que ficaram para sempre na memória."
    },
    {
      title: "Emoção",
      img: "ep2-2.jpg",
      text: "Rever essas lembranças ainda me emociona. E sim: eu sei que você gosta mais de mim sem barba.",
      note: "Rever cada registro é voltar um pouco para tudo o que sentimos."
    },
    {
      title: "Um amor",
      img: null,
      text: "Criei este espaço para guardar o que vivemos, eternizar nossas lembranças e mostrar o tamanho do meu amor por você.",
      note: "Cada lembrança guardada aqui é uma forma de dizer: eu escolheria você de novo."
    },
    {
      title: "Não vamos parar…",
      video: "ep2-video.mp4",
      text: "E isso ainda é só o começo de todas as histórias que vamos viver juntos.",
      note: "Ainda temos muitos capítulos para viver, registrar e recordar juntos."
    }
  ];

  const storyEp3 = [
  {
    title: "Nós",
    img: "ep5.jpg",
    text: "Nem todo dia é leve. Às vezes a gente erra, se perde, se desencontra. Mas é exatamente nesses momentos que a gente aprende a cuidar melhor um do outro, a ouvir mais e a estar mais presente.",
    note: "Amar também é aprender a atravessar os dias difíceis de mãos dadas."
  },
  {
    title: "Consciência",
    img: null,
    text: "Hoje eu entendi algo importante: não avisar não é falta de amor, mas machuca quem ama. E perceber isso me fez querer ser melhor por você.",
    note: "Reconhecer um erro é o primeiro passo para cuidar melhor do que importa."
  },
  {
    title: "Cuidado",
    img: null,
    text: "Quero que você se sinta segura, incluída e importante em tudo que faz parte da minha vida. Porque você é a minha maior razão, o melhor presente que Papai do Céu me deu, e eu me sinto muito privilegiado por ter você.",
    note: "Você merece sentir, em cada atitude, o lugar enorme que ocupa na minha vida."
  },
  {
    title: "Escolha",
    img: null,
    text: "E por isso, todos os dias, eu escolho amar você. Com atitudes, com cuidado e com presença.",
    note: "Não é só sobre dizer que amo. É sobre fazer essa escolha todos os dias."
  }
];

const storyEp4 = [
  {
    title: "O que ainda quero viver",
    video: "ep4-1.mp4",
    text: "Ainda temos lugares para conhecer, histórias para contar e muitos dias comuns para transformar em lembranças.",
    note: "Quero viver cada novidade ao seu lado e continuar colecionando primeiras vezes com você."
  },
  {
    title: "Os nossos dias simples",
    img: "ep4-2.png",
    text: "Amor, eu quero viver todos esses momentos que parecem \"simples\" aos olhos de outras pessoas, mas aos meus olhos, e tudo é especial ao seu lado",
    note: "Com você, é o meu lugar favorito."
  },
  {
    title: "Onde eu quero estar",
    img: "ep4-3.png",
    text: "Não importa tanto onde esse caminho vai nos levar. O que importa é continuar seguindo, de mãos dadas com você.",
    note: "O destino pode mudar. A minha vontade de caminhar ao seu lado, não."
  },
  {
    title: "Nossa história até aqui",
    img: "ep4-4.png",
    text: "São momentos simples, dias especiais e lembranças que eu nunca quero esquecer. E pensar que isso tudo é só uma parte da nossa história.",
    note: "Ainda há muito espaço nesse mural para tudo o que vamos viver juntos."
  }
];

const storyEp5 = [
  {
    title: "A menina que você foi",
    img: "ep5-1.png",
    text: "Antes de eu conhecer a mulher que mudou a minha vida, existia essa menina, com sonhos, medos e um mundo inteiro pela frente.",
    note: "Eu queria poder dizer a ela que, um dia, seria muito amada."
  },
  {
    title: "A mulher que você se tornou",
    img: "ep5-2.png",
    text: "text: "Tenho orgulho da mulher que você se tornou e de quem continua se tornando: forte, linda, carinhosa, cheia de personalidade e, acima de tudo, a minha Larissa, que me enche de orgulho todos os dias da minha vida. Amor, eu sei que muitas vezes carregamos conosco coisas do passado, marcas da infância, medos, dores e sentimentos que aprendemos a guardar somente para nós. Às vezes até tentamos enfrentar tudo sozinhos. Mas eu acredito que Deus permitiu que ficássemos juntos e, mais do que isso, me deu o privilégio de ter você na minha vida. O privilégio de poder te abraçar quando você precisar, te beijar, te amar todos os dias, ser seu amigo, seu companheiro, seu ombro e alguém com quem você possa dividir até aquilo que pesa no coração. Eu quero estar ao seu lado não apenas nos momentos bons, mas também naqueles em que você sentir que precisa de alguém para simplesmente ficar ali com você. Porque você não precisa carregar tudo sozinha. Você é uma das flores mais lindas do jardim que Deus tem cuidado, e eu me sinto privilegiado por poder acompanhar de perto cada fase do seu florescer.",.",
    note: "Você floresceu sem deixar de ser quem sempre foi."
  },
  {
    title: "O presente que você é",
    video: "ep5-3.mp4",
    text: "Seu aniversário passou, mas aquilo que eu queria dizer não ficou no passado. Ter você na minha vida é um presente que não cabe em uma única data, é um presente que quero vivenciar todos os dias da minha vida, em noivarmos, casarmos, ter a nossa familia, ter a nossa vida unidos, juntos.",
    note: "Celebrar sua vida é agradecer por você existir e por dividir essa caminhada comigo."
  },
  {
    title: "Finalmente, o final",
    img: "ep5-4.png",
    text: "Você me pediu para terminar esta história, e eu demorei mais do que deveria. Talvez porque eu ainda estivesse aprendendo que algumas coisas importantes precisam ser demonstradas, não apenas sentidas. Hoje eu termino este presente, mas não a nossa história.",
    note: "O episódio terminou. A nossa história continua."
  }
];



  let currentStory = storyEp1;
  let currentEpisodeCover = "ep1.jpg";
  let step = 0;
  let updateTimer;
  let lastFocusedElement;
  let ambientPausedForVideo = false;

  /* =====================================================
     ELEMENTOS DO MODAL
  ===================================================== */
  const modal = document.getElementById("episodeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalVideo = document.getElementById("modalVideo");
  const modalText = document.getElementById("modalText");
  const modalNote = document.getElementById("modalNote");
  const modalMediaFrame = document.getElementById("modalMediaFrame");
  const modalPlaceholder = document.getElementById("modalPlaceholder");
  const stepDots = document.getElementById("stepDots");
  const prevStep = document.getElementById("prevStep");
  const nextStep = document.getElementById("nextStep");
  const closeModal = document.getElementById("closeModal");
  const modalHome = document.getElementById("modalHome");
  const modalEpisodes = document.getElementById("modalEpisodes");
  const modalContent = document.querySelector(".modal-content");
  const indicator = document.getElementById("stepIndicator");

  function renderStepDots() {
    stepDots.innerHTML = currentStory.map((_, index) => `
      <button
        class="step-dot${index === step ? " active" : ""}"
        type="button"
        data-step="${index}"
        aria-label="Ir para a parte ${index + 1}"
        ${index === step ? 'aria-current="step"' : ""}
      ></button>
    `).join("");
  }

  function pausarSomAmbienteParaVideo() {
    if (ambientSound && !ambientSound.paused) {
      ambientSound.pause();
      ambientPausedForVideo = true;
    }
  }

  function retomarSomAmbiente() {
    if (ambientSound && ambientPausedForVideo) {
      ambientPausedForVideo = false;
      ambientSound.play().catch(() => {});
    }
  }

  /* =====================================================
     ATUALIZAR MODAL
  ===================================================== */
  function atualizarModal() {
    clearTimeout(updateTimer);
    modalContent.classList.remove("show");

    updateTimer = setTimeout(() => {
      const data = currentStory[step];

      modalTitle.innerText = data.title;
      indicator.innerHTML = `Parte <strong>${step + 1}</strong> de ${currentStory.length}`;
      modalNote.innerText = data.note || "Cada parte dessa história guarda um pedaço especial de nós.";

      modalText.innerText = "";

      // RESET
      modalImage.style.display = "none";
      modalVideo.style.display = "none";
      modalPlaceholder.style.display = "none";
      modalMediaFrame.classList.remove("is-tall-media", "is-wide-media", "is-square-media");
      modalVideo.pause();

      if (data.video) {
        pausarSomAmbienteParaVideo();
        modalVideo.onloadedmetadata = () => {
          const isWide = modalVideo.videoWidth > modalVideo.videoHeight;
          modalMediaFrame.classList.toggle("is-wide-media", isWide);
        };
        modalVideo.src = data.video;
        modalVideo.style.display = "block";
        modalVideo.currentTime = 0;
        modalVideo.play().catch(() => {});
        modalText.innerText = data.text;
      }
      else if (data.img) {
        retomarSomAmbiente();
        modalImage.onload = () => {
          const imageRatio = modalImage.naturalWidth / modalImage.naturalHeight;
          const isTall = imageRatio < 0.6;
          const isSquare = imageRatio >= 0.9 && imageRatio <= 1.1;
          modalMediaFrame.classList.toggle("is-tall-media", isTall);
          modalMediaFrame.classList.toggle("is-square-media", isSquare);
        };
        modalImage.src = data.img;
        modalImage.alt = `Imagem da etapa: ${data.title}`;
        modalImage.style.display = "block";
        if (modalImage.complete) modalImage.onload();
        modalText.innerText = data.text;
      }
      else {
        retomarSomAmbiente();
        modalPlaceholder.style.backgroundImage = `url("${currentEpisodeCover}")`;
        modalPlaceholder.style.display = "grid";
        modalText.innerText = data.text;
      }

      prevStep.disabled = step === 0;
      nextStep.innerText =
        step === currentStory.length - 1 ? "Fechar" : "Próximo →";
      renderStepDots();

      modalContent.classList.add("show");
    }, 180);
  }

  /* =====================================================
     ABRIR EPISÓDIOS
  ===================================================== */
  function abrirEpisodio(ep) {
    if (ep.classList.contains("locked")) return;

    const epNumber = ep.getAttribute("data-ep");
    if (epNumber === "1") currentStory = storyEp1;
    if (epNumber === "2") currentStory = storyEp2;
    if (epNumber === "3") currentStory = storyEp3;
    if (epNumber === "4") currentStory = storyEp4;
    if (epNumber === "5") currentStory = storyEp5;

    currentEpisodeCover = ep.querySelector("img")?.getAttribute("src") || "banner.jpg";
    lastFocusedElement = ep;
    step = 0;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    atualizarModal();
    closeModal.focus();
  }

  document.querySelectorAll(".episode").forEach(ep => {
    const isLocked = ep.classList.contains("locked");
    ep.setAttribute("role", "button");
    ep.setAttribute("tabindex", isLocked ? "-1" : "0");
    ep.setAttribute("aria-disabled", String(isLocked));

    ep.addEventListener("click", () => abrirEpisodio(ep));
    ep.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrirEpisodio(ep);
      }
    });
  });

  /* =====================================================
     NAVEGAÇÃO
  ===================================================== */
  nextStep.addEventListener("click", () => {
    if (step < currentStory.length - 1) {
      step++;
      atualizarModal();
    } else {
      fecharModal();
    }
  });

  prevStep.addEventListener("click", () => {
    if (step > 0) {
      step--;
      atualizarModal();
    }
  });

  stepDots.addEventListener("click", (e) => {
    const dot = e.target.closest(".step-dot");
    if (!dot) return;

    const targetStep = Number(dot.dataset.step);
    if (Number.isInteger(targetStep) && targetStep !== step) {
      step = targetStep;
      atualizarModal();
    }
  });

  function fecharModal() {
    clearTimeout(updateTimer);
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    modalVideo.pause();
    retomarSomAmbiente();
    document.body.style.overflow = "";
    lastFocusedElement?.focus?.();
  }

  closeModal.addEventListener("click", fecharModal);
  modalHome.addEventListener("click", (e) => {
    e.preventDefault();
    fecharModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  modalEpisodes.addEventListener("click", (e) => {
    e.preventDefault();
    fecharModal();
    document.getElementById("episodios").scrollIntoView({ behavior: "smooth" });
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;

    if (e.key === "Escape") fecharModal();
    if (e.key === "ArrowLeft" && step > 0) {
      step--;
      atualizarModal();
    }
    if (e.key === "ArrowRight" && step < currentStory.length - 1) {
      step++;
      atualizarModal();
    }
  });

});



