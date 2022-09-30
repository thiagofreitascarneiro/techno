const vm = new Vue({
    el: "#app",
    data: {
        produtos: [],
        produto: false,
    },
    filters: {
        numeroPreco(valor) {
            return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});
        }
    },
    methods: {
        fetchProdutos() {
            fetch("./api/produtos.json")
            .then(response => response.json())
            .then(response => {
                this.produtos = response;
            })
        }, 
        fetchProduto(id) {
            fetch(`./api/produtos/${id}/dados.json`)
                .then(r => r.json())
                .then(r => {
                    this.produto = r;
                })
            },
        abrirModal(id) {
            this.fetchProduto(id);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        fecharModal({target, currentTarget}) {

            if(target === currentTarget) {
                this.produto = false;
            }
            // console.log(target);
            // console.log(currentTarget)
            
        }
        },

        created() {
            this.fetchProdutos();
        } 
})