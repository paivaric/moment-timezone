"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Dhaka"] = {
	"1941" : helpers.makeTestYear("Asia/Dhaka", [
		["1941-09-30T18:06:39+00:00", "23:59:59", "HMT", -21200 / 60],
		["1941-09-30T18:06:40+00:00", "00:36:40", "BURT", -390]
	]),

	"1942" : helpers.makeTestYear("Asia/Dhaka", [
		["1942-05-14T17:29:59+00:00", "23:59:59", "BURT", -390],
		["1942-05-14T17:30:00+00:00", "23:00:00", "IST", -330],
		["1942-08-31T18:29:59+00:00", "23:59:59", "IST", -330],
		["1942-08-31T18:30:00+00:00", "01:00:00", "BURT", -390]
	]),

	"1951" : helpers.makeTestYear("Asia/Dhaka", [
		["1951-09-29T17:29:59+00:00", "23:59:59", "BURT", -390],
		["1951-09-29T17:30:00+00:00", "23:30:00", "DACT", -360]
	]),

	"1971" : helpers.makeTestYear("Asia/Dhaka", [
		["1971-03-25T17:59:59+00:00", "23:59:59", "DACT", -360],
		["1971-03-25T18:00:00+00:00", "00:00:00", "BDT", -360]
	]),

	"2009" : helpers.makeTestYear("Asia/Dhaka", [
		["2009-06-19T16:59:59+00:00", "22:59:59", "BDT", -360],
		["2009-06-19T17:00:00+00:00", "00:00:00", "BDST", -420],
		["2009-12-31T16:58:59+00:00", "23:58:59", "BDST", -420],
		["2009-12-31T16:59:00+00:00", "22:59:00", "BDT", -360]
	])
};