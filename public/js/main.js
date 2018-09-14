/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

var editTab = document.querySelector('#edit');
var addTab = document.querySelector('#add-new');
var editButtons = document.querySelectorAll('.edit-button');
var deleteButtons = document.querySelector('.delete-button');
var csrf_token = $('meta[name="csrf-token"]').attr('content');

// Show cards when the window is scrolled
window.addEventListener('scroll', function (e) {
    var grid = document.querySelector('.faded-cards');
    grid.classList.remove('hide');
    grid.classList.add('appear');
});

// Card template that is shown on Edit click
function generateCard(id, productUrl, img, title, subtitle, description) {
    var cardForm = '\n                <form class="card card-hovered d-flex h-100 flex-column justify-content-between" id="' + id + '" name="' + id + '" method="POST" action="update" >\n                    <input type="hidden" name="update" />\n                    <input type="hidden" name="id" value="' + id + '" />\n                    <div class="form-group">\n                        <label for="url">URL</label>\n                        <input type="url" class="form-control" name="url" value="' + productUrl + '" title="Website URL" >\n                    </div>\n                    <div class="form-group">\n                        <label for="photo">\u0421\u043B\u0438\u043A\u0430</label>\n                        <input type="url" name="photo" class="form-control" value="' + img + '" title="Photo URL" > \n                    </div>\n                    <div class="card-title text-secondary m-0">\n                        <div class="form-group">\n                            <label for="name">\u0418\u043C\u0435</label>\n                            <input type="text" name="name" class="card-title form-control" value="' + title + '" title="Product Name"/>\n                        </div>\n                        <div class="form-group">\n                            <label for="subtitle">\u041F\u043E\u0434\u043D\u0430\u0441\u043B\u043E\u0432</label>\n                            <input type="text" name="subtitle" class="card-text form-control" value="' + subtitle + '" />\n                        </div>\n                    </div>\n                    <div class="card-body form-group">\n                        <label for="description">\u041E\u043F\u0438\u0441</label>\n                        <textarea class="card-text form-control" name="description">' + description + '</textarea>\n                    </div>\n                    <div class="card-footer">\n                        <div class="controls">\n                            <input type="submit" class="update-button-' + id + '" value="\u0417\u0430\u0447\u0443\u0432\u0430\u0458">\n                            <input type="button" class="cancel-button-' + id + '" value="\u041E\u0442\u043A\u0430\u0436\u0438">\n                        </div>\n                    </div>\n                    <input type="hidden" name="_token" value="' + csrf_token + '">\n                </form>\n    ';
    return cardForm;
}

// Get the card data from the DOM instead of the database, and pass it to the card generator
function cardData(b) {
    var card = b.parentElement.parentElement.parentElement;

    return {
        card: card,
        id: card['id'],
        img: card.children[0].children[0].currentSrc,
        productUrl: card.children[0].href,
        title: card.children[0].children[1].children[0].innerHTML,
        subtitle: card.children[0].children[1].children[1].innerHTML,
        description: card.children[0].children[2].children[0].innerHTML,
        oldCard: card.innerHTML
    };
}

// Event listener on the edit button
var editListener = function editListener(b) {
    return b.addEventListener('click', function (e) {
        e.preventDefault();

        var _cardData = cardData(b),
            card = _cardData.card,
            id = _cardData.id,
            img = _cardData.img,
            productUrl = _cardData.productUrl,
            title = _cardData.title,
            subtitle = _cardData.subtitle,
            description = _cardData.description,
            oldCard = _cardData.oldCard;

        var cardForm = generateCard(id, productUrl, img, title, subtitle, description);

        addTab.classList.remove('active');
        editTab.classList.add('active');

        // Change the innerHTML of the card with the update form generated with the generateCard function
        card.innerHTML = cardForm;

        var updateButton = document.querySelector('.update-button-' + id);
        var cancelButton = document.querySelector('.cancel-button-' + id);

        // Update button listener
        updateButton.addEventListener('click', function (e) {
            addTab.classList.remove('active');
            editTab.classList.add('active');
        });

        // Cancel button listener, switches back the card HTML if the form is cancelled
        cancelButton.addEventListener('click', function (e) {
            e.preventDefault();
            addTab.classList.remove('active');
            editTab.classList.add('active');

            card.innerHTML = oldCard;

            // Select edit button
            var el = document.querySelector('.edit-' + id);
            // Add evt. listener to edit button since it was dropped because of the innerHTML switch
            editListener(el);
        });
    });
};

// Add event listener to the edit button after the innerHTML has been aplied, so the edit button can be clicked again
Array.from(editButtons).forEach(function (b) {
    return editListener(b);
});

// Triggering the modal
$('#deleteModal').on('shown.bs.modal', function (e) {
    $('#myInput').trigger('focus');
    var id = e.relatedTarget.parentElement.parentElement.parentElement.id;
    $('#delete-form').attr('action', '/delete?id=' + id);
});

/***/ })

/******/ });