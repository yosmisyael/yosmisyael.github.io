import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import $ from "jquery"
import setupObserver from "./observer.js"
import * as data from "./data.js"
import { movePortrait } from "./animation.js";

Alpine.plugin(intersect)
window.Alpine = Alpine
window.$ = window.jQuery = $
Alpine.start()

$(document).ready(() => {
    setupObserver($(window).width())
    window.movePortrait = movePortrait
})

