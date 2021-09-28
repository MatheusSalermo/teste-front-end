
let products = [
    {
        name: "Bateria Eletrônica",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-bateria-eletronica.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-bateria-eletronica.png",
        curr_price: "1499,90"
      },
      {
        name: "Kit de Pratos",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-pratos.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-pratos.png",
        curr_price: "1499,90"
      },
      {
        name: "Pedal Duplo para Bumbo",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedal-duplo-para-dumbo.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedal-duplo-para-dumbo.png",
        curr_price: "1499,90"
      },
      {
        name: "Módulo para Bateria",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-modulo-para-bateria.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-modulo-para-bateria.png",
        curr_price: "1499,90"
      },
  
      {
        name: "Prato 17” Medium Crash",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-prato-17-medium-crash.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-prato-17-medium-crash.png",
        curr_price: "1499,90"
      },
      {
        name: "Kit Bag para Tambores",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-bag-para-tambores.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-bag-para-tambores.png",
        curr_price: "1499,90"
      },
      {
        name: "Banco para Bateria",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-banco-para-bateria.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-banco-para-bateria.png",
        curr_price: "1499,90"
      },
      {
        name: "Pedestal para Percussão",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedestal-para-percussao.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedestal-para-percussao.png",
        curr_price: "1499,90"
      },

      {
        name: "Mixer de Video",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-mixer-de-video.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-mixer-de-video.png",
        curr_price: "1499,90"
      },
      {
        name: "Guitarra Jackson",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-guitarra-jackson.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-guitarra-jackson.png",
        curr_price: "1499,90"
      },
      {
        name: "Contrabaixo Elétrico",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-contrabaixo-eletrico.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-contrabaixo-eletrico.png",
        curr_price: "1499,90"
      },
      {
        name: "Sistema de Microfone s/ Fio",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-sistema-de-microfones-sem-fio.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-sistema-de-microfones-sem-fio.png",
        curr_price: "1499,90"
      }
  
 
]

let product_list = document.querySelector('#latest-products')


products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="card-produto">
                <div class="card-produto-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="card-produto-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bx-search' style="border-radius:20%"></i>
                        </button>
                       <p>Quick view</p>
                    </div>
                    <div class="card-produto-name">
                        <h2>
                        ${e.name}
                        </h2>
                        <p>
                        ${e.descriptionShort}
                        </P
                    </div>
                    <div class="card-produto-price">
                        <span class="curr-price">R$ ${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    
})


