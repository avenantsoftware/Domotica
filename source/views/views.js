enyo.kind({
	name: "myapp.MainView",
	classes: "moon enyo-fit",
	components: [
		{name: "panels", kind: "moon.Panels", pattern: "activity", classes: "enyo-fit", components: [
			{title: "Verlichting", components: [
				{kind: "moon.Item", content: "Bank", ontap: "Bank"},
				{kind: "moon.Item", content: "Ambilight", ontap: "Ambi"},
				{kind: "moon.Item", content: "Tafel", ontap: "Tafel"},
				{kind: "moon.Item", content: "Kast", ontap: "Kast"},
				{kind: "moon.Item", content: "Keuken", ontap: "Keuken"}
			]},
			{title: "Verlichting", joinToPrev: true, components: [
				{kind: "moon.Item", content: "Gang", ontap: "Gang"},
				{kind: "moon.Item", content: "Gang Boven", ontap: "Boven"},
				{kind: "moon.Item", content: "Slaapkamer", ontap: "Slaap"},
				{kind: "moon.Item", content: "Hobby Kamer", ontap: "Hobby"},
				{kind: "moon.Item", content: "Inloop Kast", ontap: "Inloop"}
			]},
			{title: "Apparaten", components: [
				{kind: "moon.Item", content: "Televisie", ontap: "TV"},
				{kind: "moon.Item", content: "Versterker", ontap: "Versterker"},
				{kind: "moon.Item", content: "Beamer", ontap: "Beamer"},
				{kind: "moon.Item", content: "Computer", ontap: "Computer"},
				{kind: "moon.Item", content: "PS3", ontap: "PS3"}
			]},
			{title: "Apparaten", joinToPrev: true, components: [
				{kind: "moon.Item", content: "Harde Schijf", ontap: "HDD"},
				{kind: "moon.Item", content: "Airco", ontap: "Airco"},
				{kind: "moon.Item", content: "Waterkoker", ontap: "Waterkoker"},
				{kind: "moon.Item", content: "TV Boven", ontap: "TVboven"}
			]},
			{title: "Luxaflex", joinToPrev: true, components: [
				{kind: "moon.Item", content: "Voor Open", ontap: "VoorOpen"},
				{kind: "moon.Item", content: "Voor Dicht", ontap: "VoorDicht"},
				{kind: "moon.Item", content: "Achter Open", ontap: "AchterOpen"},
				{kind: "moon.Item", content: "Achter Dicht", ontap: "AchterDicht"}
			]},
			{title: "Thermostaat", components: [
				{kind: "moon.Item", content: "Op 14", ontap: "14"},
				{kind: "moon.Item", content: "Op 18", ontap: "18"},
				{kind: "moon.Item", content: "Op 19", ontap: "19"},
				{kind: "moon.Item", content: "Op 20", ontap: "20"},
				{kind: "moon.Item", content: "Op 21", ontap: "21"}
			]},
			{title: "Beamer Scherm", joinToPrev: true, components: [
				{kind: "moon.Item", content: "Omhoog", ontap: "Omhoog"},
				{kind: "moon.Item", content: "Stop", ontap: "Stop"},
				{kind: "moon.Item", content: "Omlaag", ontap: "Omlaag"}
			]}
		]}
	],
	Bank : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/bank_toggle"
        });
        ajax.go();
    },
	Ambi : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/ambi_toggle"
        });
        ajax.go();
    },
    Tafel : function(indSender, inEvent) {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/tafel_toggle"
        });
        ajax.go();
    },
    Kast : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/kast_toggle"
        });
        ajax.go();
    },
    Keuken : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/keuken_toggle"
        });
        ajax.go();
    },
    Gang : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/gang_toggle"
        });
        ajax.go();
    },
	Boven : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/bovengang_toggle"
        });
        ajax.go();
    },
    Slaap : function(indSender, inEvent) {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/slaap_toggle"
        });
        ajax.go();
    },
    Hobby : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/hobby_toggle"
        });
        ajax.go();
    },
    Inloop : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/inloop_toggle"
        });
        ajax.go();
    },
    TV : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/tv_power"
        });
        ajax.go();
    },
	Versterker : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/versterker_toggle"
        });
        ajax.go();
    },
    Beamer : function(indSender, inEvent) {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/beamer_toggle"
        });
        ajax.go();
    },
    Computer : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/computer_toggle"
        });
        ajax.go();
    },
    PS3 : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/ps3_toggle"
        });
        ajax.go();
    },
    HDD : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/hdd_toggle"
        });
        ajax.go();
    },
	Airco : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/airco_power"
        });
        ajax.go();
    },
    Waterkoker : function(indSender, inEvent) {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/waterkoker_toggle"
        });
        ajax.go();
    },
    TVboven : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/tvboven_toggle"
        });
        ajax.go();
    },
    VoorOpen : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/flex_open"
        });
        ajax.go();
    },
    VoorDicht : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/flex_dicht"
        });
        ajax.go();
    },
	AchterOpen : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/achter_open"
        });
        ajax.go();
    },
    AchterDicht : function(indSender, inEvent) {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/achter_dicht"
        });
        ajax.go();
    },
    14 : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/set_temp=14"
        });
        ajax.go();
    },
    18 : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/set_temp=18"
        });
        ajax.go();
    },
    19 : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/set_temp=19"
        });
        ajax.go();
    },
	20 : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/set_temp=20"
        });
        ajax.go();
    },
    21 : function(indSender, inEvent) {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/set_temp=21"
        });
        ajax.go();
    },
    Omhoog : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/scherm_omhoog"
        });
        ajax.go();
    },
    Stop : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/scherm_stop"
        });
        ajax.go();
    },
    Omlaag : function() {
    	var ajax = new enyo.JsonpRequest({
            url: "http://192.168.2.70/scherm_omlaag"
        });
        ajax.go();
    }
});
