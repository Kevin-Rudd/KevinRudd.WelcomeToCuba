const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

module.exports = function TraditionsOfTheTrade(controller) {
	if (!controller.smf.modIsInstalled("Kercyx.Tradition")) {
		log(LogLevel.ERROR, "[Taditions of the Trade] Mod currently not deployed, please deploy it in SMF")
		return
	}

	controller.missionsInLocations["LOCATION_CUBA"] = ["aba5f2b1-8529-48bb-a596-717f75f5eacb", "ada5f2b1-8529-48bb-a596-717f75f5eacb"]

	controller.configManager.configs.LocationsData["parents"]["LOCATION_PARENT_CUBA"] = {
		Id: "LOCATION_PARENT_CUBA",
		"Guid": "db751edf-87af-4c81-8855-76a8fb8ad96f",
		"Type": "location",
		"Subtype": "location",
		"RMTPrice": -1,
		"GamePrice": -1,
		"IsPurchasable": false,
		"IsPublished": true,
		"IsDroppable": false,
		"Capabilities": [],
		"Qualities": {},
		"Properties": {
			"Icon": "images/bdm_tiles/location_parent_cuba/tile.jpg",
			"LockedIcon": "images/bdm_tiles/location_parent_cuba/tile.jpg",
			"DlcImage": "images/livetile/dlc/tile_hitman3.jpg",
			"DlcName": "GAME_STORE_METADATA_S3_GAME_TITLE",
			"IsLocked": false,
			"UpcomingContent": false,
			"UpcomingKey": "UI_MENU_LIVETILE_CONTENT_UPCOMING_HEADLINE",
			"Background": "images/bdm_tiles/location_parent_cuba/background.jpg",
			"Order": 15,
			"LimitedLoadout": false,
			"NormalLoadoutUnlock": "",
			"ProgressionKey": "LOCATION_CUBA",
			"Season": 1,
			"RequiredResources": ["[assembly:/_pro/scenes/missions/thefacility/_scene_polarbear_005.entity].entitytemplate"]
		}		
	}

	controller.configManager.configs.LocationsData["children"]["LOCATION_CUBA"] = {
		Id: "LOCATION_CUBA",
		"Guid": "53e5c898-db72-431d-9d3d-baba814b8a97",
		"Type": "location",
		"Subtype": "sublocation",
		"RMTPrice": -1,
		"GamePrice": -1,
		"IsPurchasable": false,
		"IsPublished": true,
		"IsDroppable": false,
		"Capabilities": [],
		"Qualities": {},
		"Properties": {
			"ParentLocation": "LOCATION_PARENT_CUBA",
			"Icon": "images/bdm_tiles/location_parent_cuba/tile.jpg",
			"LockedIcon": "images/bdm_tiles/location_parent_cuba/tile.jpg",
			"DlcImage": "images/livetile/dlc/tile_hitman3.jpg",
			"DlcName": "GAME_STORE_METADATA_S3_GAME_TITLE",
			"IsLocked": false,
			"UpcomingContent": false,
			"UpcomingKey": "UI_MENU_LIVETILE_CONTENT_UPCOMING_HEADLINE",
			"Background": "images/bdm_tiles/location_parent_cuba/background.jpg",
			"Order": 0,
			"LimitedLoadout": false,
			"ProgressionKey": "LOCATION_CUBA",
			"CreateContractId": "964fd95c-789c-412c-bff5-17d276a92841",
			"HideProgression": false,
			"RequiredResources": ["[assembly:/_pro/scenes/missions/thefacility/_scene_polarbear_005.entity].entitytemplate"]
		}
	}

	controller.configManager.configs.LocationsData["parents"] = Object.entries(
		controller.configManager.configs.LocationsData["parents"]
	)
		.sort((a, b) => a[1]["Properties"]["Order"] - b[1]["Properties"]["Order"])
		.reduce(
			(obj, [key, value]) => ({
				...obj,
				[key]: value
			}),
			{}
		)

	controller.configManager.configs.LocationsData["children"] = Object.entries(
		controller.configManager.configs.LocationsData["children"]
	)
		.sort((a, b) => a[1]["Properties"]["Order"] - b[1]["Properties"]["Order"])
		.reduce(
			(obj, [key, value]) => ({
				...obj,
				[key]: value
			}),
			{}
		)

	log(LogLevel.INFO, "[Traditions of the Trade] Plugin active.")
}
