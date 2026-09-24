// ========================================
// BLACKLINE SHOP
// ========================================


// ========================================
// PLAYER STATE
// ========================================

const player =
    getPlayer();


// ========================================
// ELEMENTS
// ========================================

const moneyElement =
    document.getElementById("shopMoney");

const messageElement =
    document.getElementById("shopMessage");

const categoryTitleElement =
    document.getElementById("categoryTitle");

const itemCountElement =
    document.getElementById("itemCount");

const backButton =
    document.getElementById("backButton");

const categoryButtons =
    document.querySelectorAll(
        ".category-button"
    );

const categoryGrids =
    document.querySelectorAll(
        ".shop-grid"
    );

const purchaseButtons =
    document.querySelectorAll(
        ".purchase-button"
    );


// ========================================
// MAKE SURE INVENTORY EXISTS
// ========================================

if (!player.inventory) {

    player.inventory = {};

    savePlayer(player);

}


// ========================================
// UPDATE MONEY DISPLAY
// ========================================

function updateMoney() {

    if (!moneyElement) {

        return;

    }


    moneyElement.textContent =
        "$" +
        player.money.toLocaleString();

}


// ========================================
// SHOW MESSAGE
// ========================================

function showMessage(
    message,
    isError = false
) {

    if (!messageElement) {

        return;

    }


    messageElement.textContent =
        message;


    messageElement.classList.toggle(
        "error",
        isError
    );


    setTimeout(
        function () {

            messageElement.textContent =
                "";

            messageElement.classList.remove(
                "error"
            );

        },
        2500
    );

}


// ========================================
// UPDATE PURCHASE BUTTONS
// ========================================

function updatePurchaseButtons() {

    purchaseButtons.forEach(
        function (button) {

            const item =
                button.dataset.item;


            if (
                player.inventory[item]
            ) {

                button.textContent =
                    "OWNED";


                button.classList.add(
                    "owned"
                );


                button.disabled =
                    true;

            }

        }
    );

}


// ========================================
// BACK TO DASHBOARD
// ========================================

if (backButton) {

    backButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "./dashboard.html";

        }
    );

}


// ========================================
// CATEGORY SWITCHING
// ========================================

categoryButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const selectedCategory =
                    button.dataset.category;


                // ----------------------------
                // UPDATE ACTIVE BUTTON
                // ----------------------------

                categoryButtons.forEach(
                    function (otherButton) {

                        otherButton.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                // ----------------------------
                // HIDE ALL CATEGORIES
                // ----------------------------

                categoryGrids.forEach(
                    function (grid) {

                        grid.classList.add(
                            "hidden"
                        );

                    }
                );


                // ----------------------------
                // SHOW SELECTED CATEGORY
                // ----------------------------

                const selectedGrid =
                    document.getElementById(
                        selectedCategory +
                        "Category"
                    );


                if (selectedGrid) {

                    selectedGrid.classList.remove(
                        "hidden"
                    );

                }


                // ----------------------------
                // UPDATE TITLE
                // ----------------------------

                if (
                    categoryTitleElement
                ) {

                    if (
                        selectedCategory ===
                        "equipment"
                    ) {

                        categoryTitleElement.textContent =
                            "EQUIPMENT";

                    }

                    else if (
                        selectedCategory ===
                        "intel"
                    ) {

                        categoryTitleElement.textContent =
                            "INTELLIGENCE";

                    }

                    else if (
                        selectedCategory ===
                        "special"
                    ) {

                        categoryTitleElement.textContent =
                            "SPECIAL";

                    }

                }


                // ----------------------------
                // UPDATE ITEM COUNT
                // ----------------------------

                if (
                    selectedGrid &&
                    itemCountElement
                ) {

                    const visibleItems =
                        selectedGrid.querySelectorAll(
                            ".shop-card"
                        ).length;


                    itemCountElement.textContent =
                        String(
                            visibleItems
                        ).padStart(2, "0") +
                        " ITEMS";

                }

            }
        );

    }
);


// ========================================
// PURCHASE ITEMS
// ========================================

purchaseButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const item =
                    button.dataset.item;


                const price =
                    Number(
                        button.dataset.price
                    );


                // ----------------------------
                // ALREADY OWNED
                // ----------------------------

                if (
                    player.inventory[item]
                ) {

                    showMessage(
                        "ITEM ALREADY OWNED."
                    );

                    return;

                }


                // ----------------------------
                // INSUFFICIENT FUNDS
                // ----------------------------

                if (
                    player.money <
                    price
                ) {

                    showMessage(
                        "INSUFFICIENT FUNDS.",
                        true
                    );

                    return;

                }


                // ----------------------------
                // REMOVE MONEY
                // ----------------------------

                player.money -=
                    price;


                // ----------------------------
                // ADD TO INVENTORY
                // ----------------------------

                player.inventory[item] =
                    true;


                // ----------------------------
                // SAVE PLAYER
                // ----------------------------

                savePlayer(
                    player
                );


                // ----------------------------
                // UPDATE MONEY
                // ----------------------------

                updateMoney();


                // ----------------------------
                // UPDATE BUTTON
                // ----------------------------

                button.textContent =
                    "OWNED";


                button.classList.add(
                    "owned"
                );


                button.disabled =
                    true;


                // ----------------------------
                // SUCCESS MESSAGE
                // ----------------------------

                showMessage(
                    "ITEM ACQUIRED."
                );

            }
        );

    }
);


// ========================================
// INITIALIZE
// ========================================

updateMoney();

updatePurchaseButtons();