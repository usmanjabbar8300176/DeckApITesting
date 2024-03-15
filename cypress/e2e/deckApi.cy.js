import Deck from "../support/deckApiPO";
const deck = new Deck();

let deck_id = "";
let pile_name = "pile_qa";

describe("Deck of Cards API", () => {
  before(() => {
    deck.createNewDeck().then(response => {
      deck_id = response

    })
  })


  it("should Shuffle new created Deck", () => {
    deck.shuffleNewDeck(deck_id)
  });

  it("draw card deck", () => {

    deck.drawCardsDeck(deck_id)
  })

  it("Reshuffled the Deck", () => {

    deck.reshuffledDeck(deck_id)
  })

  it("Partial Deck", () => {

    deck.partialDeck(deck_id)
  })

  it("Add Card to Pile Test", () => {

    deck.addCardtoPileTest(deck_id, pile_name)
  })

  it("Shuffle the Piles", () => {

    deck.shufflePiles(deck_id, pile_name)
  })

  it("List the card in the Piles", () => {

    deck.listCardPiles(deck_id, pile_name)
  })

  it("Return the Card to the Deck", () => {

    deck.returnCardDeck(deck_id)
  })

  it("Back on the Card Image", () => {

    deck.backCardImage()
  })



});
