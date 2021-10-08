export default {
	"id": "werbepost-abbestellen-2770",
	"api": {
		"status": null,
		"errors": null,
		"callbacks": [],
		"actionAfterSuccess": null,
		"page": {
			"current": 1,
			"nextPage": null,
			"pages": 1,
			"labels": {
				"nextButtonLabel": "Werbepost abbestellen"
			},
			"submitButtonAlignment": "right"
		}
	},
	"action": "/kontakt/werbepost/#werbepost-abbestellen-2770",
	"i18n": [],
	"elements": [
		{
			"type": "GridRow",
			"identifier": "gridrow-1",
			"label": "Grid: Row",
			"defaultValue": null,
			"properties": [],
			"elements": [
				{
					"defaultValue": "",
					"type": "Text",
					"identifier": "firstname",
					"label": "Vorname",
					"properties": {
						"elementDescription": "",
						"gridColumnClassAutoConfiguration": {
							"viewPorts": {
								"lg": {
									"numbersOfColumnsToUse": "6"
								},
								"md": {
									"numbersOfColumnsToUse": "6"
								},
								"sm": {
									"numbersOfColumnsToUse": "12"
								},
								"xs": {
									"numbersOfColumnsToUse": "12"
								}
							}
						},
						"fluidAdditionalAttributes": {
							"required": "required"
						},
						"validationErrorMessages": [
							{
								"code": 1221560910,
								"message": "Pflichtfeld"
							},
							{
								"code": 1221560718,
								"message": "Pflichtfeld"
							},
							{
								"code": 1347992400,
								"message": "Pflichtfeld"
							},
							{
								"code": 1347992453,
								"message": "Pflichtfeld"
							}
						]
					},
					"validators": [
						{
							"identifier": "NotEmpty",
							"code": 1221560910,
							"errorMessage": "Pflichtfeld"
						}
					],
					"name": "tx_form_formframework[werbepost-abbestellen-2770][firstname]"
				},
				{
					"defaultValue": "",
					"type": "Text",
					"identifier": "name",
					"label": "Name",
					"properties": {
						"gridColumnClassAutoConfiguration": {
							"viewPorts": {
								"lg": {
									"numbersOfColumnsToUse": "6"
								},
								"md": {
									"numbersOfColumnsToUse": "6"
								},
								"sm": {
									"numbersOfColumnsToUse": "12"
								},
								"xs": {
									"numbersOfColumnsToUse": "12"
								}
							}
						},
						"fluidAdditionalAttributes": {
							"required": "required"
						},
						"validationErrorMessages": [
							{
								"code": 1221560910,
								"message": "Pflichtfeld"
							},
							{
								"code": 1221560718,
								"message": "Pflichtfeld"
							},
							{
								"code": 1347992400,
								"message": "Pflichtfeld"
							},
							{
								"code": 1347992453,
								"message": "Pflichtfeld"
							}
						]
					},
					"validators": [
						{
							"identifier": "NotEmpty",
							"code": 1221560910,
							"errorMessage": "Pflichtfeld"
						}
					],
					"name": "tx_form_formframework[werbepost-abbestellen-2770][name]"
				}
			]
		},
		{
			"type": "GridRow",
			"identifier": "gridrow-2",
			"label": "Grid: Row",
			"defaultValue": null,
			"properties": [],
			"elements": [
				{
					"defaultValue": "",
					"type": "Text",
					"identifier": "plz",
					"label": "PLZ",
					"properties": {
						"gridColumnClassAutoConfiguration": {
							"viewPorts": {
								"lg": {
									"numbersOfColumnsToUse": "2"
								},
								"md": {
									"numbersOfColumnsToUse": "4"
								},
								"sm": {
									"numbersOfColumnsToUse": "12"
								},
								"xs": {
									"numbersOfColumnsToUse": "12"
								}
							}
						},
						"fluidAdditionalAttributes": {
							"required": "required"
						},
						"validationErrorMessages": [
							{
								"code": 1221560910,
								"message": "Pflichtfeld"
							},
							{
								"code": 1221560718,
								"message": "Pflichtfeld"
							},
							{
								"code": 1347992400,
								"message": "Pflichtfeld"
							},
							{
								"code": 1347992453,
								"message": "Pflichtfeld"
							}
						]
					},
					"validators": [
						{
							"identifier": "NotEmpty",
							"code": 1221560910,
							"errorMessage": "Pflichtfeld"
						}
					],
					"name": "tx_form_formframework[werbepost-abbestellen-2770][plz]"
				},
				{
					"defaultValue": "",
					"type": "Text",
					"identifier": "kdnr",
					"label": "Kd-Nr.",
					"properties": {
						"gridColumnClassAutoConfiguration": {
							"viewPorts": {
								"lg": {
									"numbersOfColumnsToUse": "10"
								},
								"md": {
									"numbersOfColumnsToUse": "8"
								},
								"sm": {
									"numbersOfColumnsToUse": "12"
								},
								"xs": {
									"numbersOfColumnsToUse": "12"
								}
							}
						},
						"fluidAdditionalAttributes": {
							"required": "required",
							"minlength": "5",
							"maxlength": "10"
						},
						"validationErrorMessages": [
							{
								"code": 1238110957,
								"message": "Bitte geben Sie maximal 10 Zeichen ein"
							},
							{
								"code": 1269883975,
								"message": "Bitte geben Sie maximal 10 Zeichen ein"
							},
							{
								"code": 1428504122,
								"message": "Bitte geben Sie maximal 10 Zeichen ein"
							},
							{
								"code": 1238108068,
								"message": "Bitte geben Sie maximal 10 Zeichen ein"
							},
							{
								"code": 1238108069,
								"message": "Bitte geben Sie maximal 10 Zeichen ein"
							},
							{
								"code": 1221560910,
								"message": "Pflichtfeld"
							},
							{
								"code": 1221560718,
								"message": "Pflichtfeld"
							},
							{
								"code": 1347992400,
								"message": "Pflichtfeld"
							},
							{
								"code": 1347992453,
								"message": "Pflichtfeld"
							}
						]
					},
					"validators": [
						{
							"identifier": "NotEmpty",
							"code": 1221560910,
							"errorMessage": "Pflichtfeld"
						},
						{
							"options": {
								"minimum": "5",
								"maximum": "10"
							},
							"identifier": "StringLength",
							"code": 1428504122,
							"errorMessage": "Bitte geben Sie maximal 10 Zeichen ein"
						}
					],
					"name": "tx_form_formframework[werbepost-abbestellen-2770][kdnr]"
				}
			]
		},
		{
			"properties": {
				"text": "Datenschutz",
				"link": "/datenschutz/",
				"linkText": "Datenschutz",
				"openInOverlay": false,
				"openInNewWindow": true
			},
			"type": "LinkedText",
			"identifier": "linkedtext-1",
			"label": "",
			"defaultValue": null,
			"name": "tx_form_formframework[werbepost-abbestellen-2770][linkedtext-1]"
		},
		{
			"properties": {
				"containerClassAttribute": "input",
				"elementClassAttribute": "",
				"elementErrorClassAttribute": "error",
				"renderAsHiddenField": false,
				"styleAttribute": "position:absolute; margin:0 0 0 -999em;"
			},
			"type": "Honeypot",
			"identifier": "V3ovKOXtELag4pQ",
			"label": "",
			"defaultValue": null,
			"name": "tx_form_formframework[werbepost-abbestellen-2770][V3ovKOXtELag4pQ]"
		},
		{
			"properties": [],
			"type": "Hidden",
			"identifier": "__currentPage",
			"defaultValue": 1,
			"label": "",
			"name": "tx_form_formframework[werbepost-abbestellen-2770][__currentPage]"
		},
		{
			"properties": [],
			"type": "Hidden",
			"identifier": "__trustedProperties",
			"defaultValue": "a:1:{s:26:\"werbepost-abbestellen-2770\";a:7:{s:9:\"firstname\";i:1;s:4:\"name\";i:1;s:3:\"plz\";i:1;s:4:\"kdnr\";i:1;s:12:\"linkedtext-1\";i:1;s:15:\"V3ovKOXtELag4pQ\";i:1;s:13:\"__currentPage\";i:1;}}2a107992c1365617411fce0187d9228bd1c22e78",
			"label": "",
			"name": "tx_form_formframework[werbepost-abbestellen-2770][__trustedProperties]"
		},
		{
			"properties": [],
			"type": "Hidden",
			"identifier": "__state",
			"defaultValue": "TzozOToiVFlQTzNcQ01TXEZvcm1cRG9tYWluXFJ1bnRpbWVcRm9ybVN0YXRlIjoyOntzOjI1OiIAKgBsYXN0RGlzcGxheWVkUGFnZUluZGV4IjtpOjA7czoxMzoiACoAZm9ybVZhbHVlcyI7YTowOnt9fQ==a45ab2a02b3ae2a3c79bf0f98b6f4f95c6867f01",
			"label": "",
			"name": "tx_form_formframework[werbepost-abbestellen-2770][__state]"
		}
	]
}
