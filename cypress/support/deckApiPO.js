class Deck {
    createNewDeck() {
        return cy.request("GET", "api/deck/new/")
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.isOkStatusCode).to.eq(true);
                expect(response.body.success).to.eq(true);
                return response.body.deck_id;
            })
    }
    shuffleNewDeck(deck_id) {
        cy.request("GET", `api/deck/${deck_id}/shuffle/?remaining=true`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.remaining).to.eq(52);
                expect(response.body.shuffled).to.eq(true);
                expect(response.body.success).to.eq(true);
            });
    }

    drawCardsDeck(deck_id) {
        cy.request("GET", `api/deck/${deck_id}/draw/?count=2`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.isOkStatusCode).to.equal(true);
                expect(response.statusText).to.equal("OK");

            })

    }

    reshuffledDeck(deck_id) {

        cy.request("GET", `api/deck/${deck_id}/shuffle/`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.success).to.eq(true);
                expect(response.body.shuffled).to.equal(true);
                expect(response.body.remaining).to.equal(52);


            })

    }

    partialDeck(deck_id) {

        cy.request("GET", `api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.success).to.eq(true);
                expect(response.body.shuffled).to.equal(true);
                expect(response.body.remaining).to.equal(12);


            })

    }

    addCardtoPileTest(deck_id, pile_name) {

        cy.request("GET", `api/deck/${deck_id}/pile/${pile_name}/add/?cards=AS,2S`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.success).to.eq(true);
                expect(response.body.remaining).to.eq(52);
                expect(response.statusText).to.equal("OK");

            })

    }

    shufflePiles(deck_id, pile_name) {

        cy.request("GET", `api/deck/${deck_id}/pile/${pile_name}/shuffle/`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.success).to.eq(true);
                expect(response.body.remaining).to.eq(52);
                expect(response.statusText).to.equal("OK");

            })

    }

    listCardPiles(deck_id, pile_name) {

        cy.request("GET", `api/deck/${deck_id}/pile/${pile_name}/list/`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.success).to.eq(true);
                expect(response.body.remaining).to.eq(52);
                expect(response.statusText).to.equal("OK");

            })

    }

    returnCardDeck(deck_id,) {

        cy.request("GET", `api/deck/${deck_id}/return/`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.success).to.eq(true);
                expect(response.statusText).to.equal("OK");

            })

    }

    backCardImage() {

        cy.request("GET", `static/img/back.png`)
            .then((response) => {
                 expect(response.status).to.eq(200);
                expect(response.isOkStatusCode).to.eq(true);
                 expect(response.statusText).to.equal("OK");

            })

    }

}

export default Deck;