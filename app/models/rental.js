import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	owner: DS.attr(),
	city: DS.attr(),
	type: DS.attr(),
	image: DS.attr(),
	bedrooms: DS.attr(),
	description: DS.attr()
});




/*
{"room":{"name":"STANDARD CASAL DIÁRIA(S) COM CAFÉ DA MANHÃ","mealPlan":"DIÁRIA(S) COM CAFÉ DA MANHÃ","category":"STANDARD CASAL","minPax":1,"maxPax":3,"quantityAvailable":5,"isAvailable":true,"rates":[{"rateToken":"PGhvdDpyYXRlVG9rZW4geG1sbnM6aG90PSJodHRwOi8vY3ZjLmNvbS5ici9tb2RlbC9ob3RlbHMiIHBsYT0iMzYiIGNtaT0iMzYiIGNtYz0iMzYwMDEiIHJ0az0iZDM5MWEyNzktMzlkNC00MDAxLThjYzctMjMzZmEzM2ZmOWFlLTUwMDMiIHJ0cD0iNDgyMDQwIiBydGM9IjIwNDc3ODc1NSIgY2hhPSI3NzUuNjAiIG5hZD0iMSIgYmV0PSIxMyIgY3VyPSJCUkwiIGl6bz0iMzM4MzAiIGFncz0iVyIgYnJjPSIxMDAwIiBsYW49InB0X0JSIiBkaW49IjIwMTYtMTAtMjgiIGRvdT0iMjAxNi0xMC0yOSIgcGtnPSJWSEkiIHB4cz0iMzAiLz4=","currency":"BRL","priceWithTax":285.13,"priceWithoutTax":280.15,"pricePerDayWithTax":285.13,"pricePerDayWithoutTax":285.13,"contents":[{"code":"description-agreement","description":"Description Agreement","items":[{"code":"description-agreement","description":"DIÁRIA(S) COM CAFÉ DA MANHÃ (APARTAMENTO COM 1 CAMA DE CASAL + 1 SOFÁ CAMA) - BRASIL FÁCIL"}]}]}]}}
*/