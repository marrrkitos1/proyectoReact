class CotizadorLogic {
    constructor(factorPropiedad, factorUbicacion, metros2) {
        this.costoM2 = 35.86;
        this.factorPropiedad = (factorPropiedad);
        this.factorUbicacion = (factorUbicacion);
        this.metros2 = parseInt(metros2, 10);
    }

    cotizarPoliza() {
        const resultado = this.costoM2 * this.factorPropiedad * this.factorUbicacion * this.metros2;
        return resultado.toFixed(2);
    }

    datosCompletos() {
        return (
            this.costoM2 &&
            !isNaN(this.costoM2) &&
            this.factorPropiedad &&
            !isNaN(this.factorPropiedad) &&
            this.factorUbicacion &&
            !isNaN(this.factorUbicacion) &&
            this.metros2 &&
            !isNaN(this.metros2)
        );
    }
}

export default CotizadorLogic;
