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
      text: "Tudo começou com mensagens simples… Com aquela \"enrolação\", de ir na igreja da dona Larissa."
    },
    {
      title: "O time",
      img: "ep1-2.jpg",
      text: "Quando você queria saber o quanto antes se seria mais tranquilo saber do time."
    },
    {
      title: "Quando percebi",
      img: null,
      text: "Eu já estava completamente apaixonado. Só queria conversar e estar junto."
    },
    {
      title: "E hoje",
      img: null,
      text: "O que começou sem pretensão virou conexão. E dali em diante, nada mais foi igual."
    }
  ];

  const storyEp2 = [
    {
      title: "Mais próximos",
      img: "ep2-1.jpg",
      text: "Conhecer a família foi um privilégio. Minha mente já caminhava para o futuro."
    },
    {
      title: "Emoção",
      img: "ep2-2.jpg",
      text: "Me emocionei ao rever essas lembranças. E sim… sem barba você gosta mais 😅"
    },
    {
      title: "Um amor",
      img: null,
      text: "Eu fiz isso para eternizar nossas lembranças e mostrar o quanto te amo."
    },
    {
      title: "Não vamos parar…",
      video: "ep2-video.mp4",
      text: "E isso é só o começo das nossas histórias."
    }
  ];

  const storyEp3 = [
    {
      title: "Rotina",
      img: "ep3.jpg",
      text: "Os dias passaram a ter você."
    },
    {
      title: "Cuidado",
      img: "ep3.jpg",
      text: "Cada detalhe importava."
    },
    {
      title: "Sentimento",
      img: "ep3.jpg",
      text: "Já não era só conversa."
    },
    {
      title: "Certeza",
      img: null,
      text: "Era sentimento. Era escolha."
    }
  ];

const storyEp4 = [
  {
    title: "Nós",
    img: "ep4.jpg",
    text: "Nem todo dia é leve. Às vezes a gente erra, se perde, se desencontra. Mas é exatamente nesses momentos que a gente aprende a cuidar melhor um do outro, a ouvir mais e a estar mais presente."
  },
  {
    title: "Consciência",
    img: "ep4.jpg",
    text: "Hoje eu entendi algo importante: não avisar não é falta de amor, mas machuca quem ama. E perceber isso me fez querer ser melhor por você."
  },
  {
    title: "Cuidado",
    img: "ep4.jpg",
    text: "Quero que você se sinta segura, incluída e importante em tudo que faz parte da minha vida. Porque você é a minha maior razão, o melhor presente que Papai do Céu me deu, e eu me sinto muito privilegiado por ter você."
  },
  {
    title: "Escolha",
    img: null,
    text: "E por isso, todos os dias, eu escolho amar você. Com atitudes, com cuidado e com presença."
  }
];



  let currentStory = storyEp1;
  let step = 0;

  /* =====================================================
     ELEMENTOS DO MODAL
  ===================================================== */
  const modal = document.getElementById("episodeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalVideo = document.getElementById("modalVideo");
  const modalText = document.getElementById("modalText");
  const prevStep = document.getElementById("prevStep");
  const nextStep = document.getElementById("nextStep");
  const closeModal = document.getElementById("closeModal");
  const modalContent = document.querySelector(".modal-content");
  const indicator = document.getElementById("stepIndicator");

  /* =====================================================
     EFEITO DE DIGITAÇÃO
  ===================================================== */
  function typeText(text, element, speed = 40) {
    element.innerHTML = "";
    let i = 0;
    const typing = setInterval(() => {
      element.innerHTML += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(typing);
    }, speed);
  }

  /* =====================================================
     ATUALIZAR MODAL
  ===================================================== */
  function atualizarModal() {
    modalContent.classList.remove("show");

    setTimeout(() => {
      const data = currentStory[step];

      modalTitle.innerText = data.title;
      indicator.innerText = `Parte ${step + 1} / ${currentStory.length}`;

      modalText.innerHTML = "";

      // RESET
      modalImage.style.display = "none";
      modalVideo.style.display = "none";
      modalVideo.pause();

      if (data.video) {
        modalVideo.src = data.video;
        modalVideo.style.display = "block";
        modalVideo.currentTime = 0;
        modalVideo.play().catch(() => {});
        modalText.innerText = data.text;
      }
      else if (data.img) {
        modalImage.src = data.img;
        modalImage.style.display = "block";
        modalText.innerText = data.text;
      }
      else {
        typeText(data.text, modalText);
      }

      prevStep.style.display = step === 0 ? "none" : "inline-block";
      nextStep.innerText =
        step === currentStory.length - 1 ? "Fechar" : "Próximo →";

      modalContent.classList.add("show");
    }, 250);
  }

  /* =====================================================
     ABRIR EPISÓDIOS
  ===================================================== */
  document.querySelectorAll(".episode").forEach(ep => {
    ep.addEventListener("click", () => {
      if (ep.classList.contains("locked")) return;

      const epNumber = ep.getAttribute("data-ep");
      if (epNumber === "1") currentStory = storyEp1;
      if (epNumber === "2") currentStory = storyEp2;
      if (epNumber === "3") currentStory = storyEp3;
      if (epNumber === "4") currentStory = storyEp4;

      step = 0;
      atualizarModal();
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
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

  function fecharModal() {
    modal.classList.remove("active");
    modalVideo.pause();
    document.body.style.overflow = "auto";
  }

  closeModal.addEventListener("click", fecharModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
  });

});

