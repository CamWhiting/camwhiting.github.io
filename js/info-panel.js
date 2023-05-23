/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  modal: null,
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
    var self = this;


   
    
    // Code to close modal
    var modal = document.getElementById("myModal"); // Store the modal reference
    var span = document.getElementsByClassName("close")[0];

    
    span.onclick = function() {
      modal.style.display = "none";
      document.querySelector('#camera').setAttribute('look-controls', 'enabled', true);

    }; 

    this.TitleEl = document.querySelector('#Title');
    this.DescriptionEl = document.querySelector('#Description');
  
      this.Info = {
        /* Safe Speakers. No viewer discression */
        howardButton: {
          title: 'Howard Riley',
          imgEl: document.querySelector('#howardImage'),
          description: `
          <div style="text-align: center;">
          <iframe width="600" height="315" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br>
          <p>This is an example of Howard\'s dialogue. Here, I would advise adding the transcript of what howard is saying, along with any other background information on Howard that he is comfortable providing.</p>`, 
        },
        dianneButton: {
          title: 'Dianne Mippy',
          imgEl: document.querySelector('#dianneImage'),
          description: 'The Wind Rises is a fictionalised biographical film of Jiro Horikoshi (1903, 1982), designer of the Mitsubishi A5M fighter aircraft and its successor, the Mitsubishi A6M Zero, used by the Empire of Japan during World War II. The film is adapted from Miyazaki\'s manga of the same name, which was in turn loosely based on both the 1937 novel The Wind Has Risen by Tatsuo Hori and the life of Jiro Horikoshi.'
        },
        edithButton: {
          title: 'Edith de Giambattista',
          imgEl: document.querySelector('#edithImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        garryButton: {
          title: 'Garry Ryder',
          imgEl: document.querySelector('#garryImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        jenniferButton: {
          title: 'Jennifer Mogridge',
          imgEl: document.querySelector('#jenniferImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        lenButton: {
          title: 'Len Oglive',
          imgEl: document.querySelector('#lenImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        maisieButton: {
          title: 'Maisie Weston',
          imgEl: document.querySelector('#maisieImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        stephanieButton: {
          title: 'Stephanie Mippy',
          imgEl: document.querySelector('#jenniferImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        timButton: {
          title: 'Time Flowers',
          imgEl: document.querySelector('#timImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        tonjiButton: {
          title: 'Tonji Hansen',
          imgEl: document.querySelector('#tonjiImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
      };
  
      this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
      this.onBackgroundClick = this.onBackgroundClick.bind(this);

  
      this.backgroundEl = document.querySelector('#background');

      for (var i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].addEventListener('click', this.onMenuButtonClick);
        buttonEls[i].addEventListener('mouseleave', this.onMouseLeave);
      }

      this.backgroundEl.addEventListener('click', this.onBackgroundClick);
      this.el.object3D.renderOrder = 9999999;
      this.el.object3D.depthTest = false;
      fadeBackgroundEl.object3D.renderOrder = 9;
      fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
    },
  
    onMenuButtonClick: function (evt) {
      var modal = document.getElementById("myModal"); // Store the modal reference
      var Info = this.Info[evt.currentTarget.id];

      var currentEntity = evt.currentTarget;
      if (!currentEntity.classList.contains('menu-button')) {
        currentEntity.classList.add('menu-button')

      }else{
        currentEntity.classList.remove('menu-button')
        document.querySelector('#camera').setAttribute('look-controls', 'enabled', false);


        var infoKey = evt.currentTarget.id;
        var Info = this.Info[infoKey];

        this.TitleEl.innerText = Info.title;
        this.DescriptionEl.innerHTML = Info.description;
    
        this.backgroundEl.object3D.scale.set(1, 1, 1);
        modal.style.display = "flex";

              
        this.el.object3D.scale.set(1, 1, 1);
        if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
        this.el.object3D.visible = true;
        this.TitleEl.setAttribute('text', 'value', Info.title);
        this.DescriptionEl.setAttribute('text', 'value', Info.description);
      }
    },

  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
      this.fadeBackgroundEl.object3D.visible = false;
      modal.style.display = "none";
      document.querySelector('#camera').setAttribute('look-controls', 'enabled', true);

      
    },

    
  })
  

