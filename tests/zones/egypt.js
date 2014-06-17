"use strict";

var helpers = require("../helpers/helpers");

exports["Egypt"] = {
	"1940" : helpers.makeTestYear("Egypt", [
		["1940-07-14T21:59:59+00:00", "23:59:59", "EET", -120],
		["1940-07-14T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1940-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1940-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1941" : helpers.makeTestYear("Egypt", [
		["1941-04-14T21:59:59+00:00", "23:59:59", "EET", -120],
		["1941-04-14T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1941-09-15T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1941-09-15T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1942" : helpers.makeTestYear("Egypt", [
		["1942-03-31T21:59:59+00:00", "23:59:59", "EET", -120],
		["1942-03-31T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1942-10-26T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1942-10-26T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1943" : helpers.makeTestYear("Egypt", [
		["1943-03-31T21:59:59+00:00", "23:59:59", "EET", -120],
		["1943-03-31T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1943-10-31T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1943-10-31T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1944" : helpers.makeTestYear("Egypt", [
		["1944-03-31T21:59:59+00:00", "23:59:59", "EET", -120],
		["1944-03-31T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1944-10-31T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1944-10-31T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1945" : helpers.makeTestYear("Egypt", [
		["1945-04-15T21:59:59+00:00", "23:59:59", "EET", -120],
		["1945-04-15T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1945-10-31T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1945-10-31T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1957" : helpers.makeTestYear("Egypt", [
		["1957-05-09T21:59:59+00:00", "23:59:59", "EET", -120],
		["1957-05-09T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1957-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1957-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1958" : helpers.makeTestYear("Egypt", [
		["1958-04-30T21:59:59+00:00", "23:59:59", "EET", -120],
		["1958-04-30T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1958-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1958-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1959" : helpers.makeTestYear("Egypt", [
		["1959-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1959-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1959-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1959-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1960" : helpers.makeTestYear("Egypt", [
		["1960-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1960-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1960-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1960-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1961" : helpers.makeTestYear("Egypt", [
		["1961-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1961-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1961-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1961-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1962" : helpers.makeTestYear("Egypt", [
		["1962-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1962-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1962-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1962-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1963" : helpers.makeTestYear("Egypt", [
		["1963-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1963-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1963-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1963-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1964" : helpers.makeTestYear("Egypt", [
		["1964-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1964-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1964-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1964-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1965" : helpers.makeTestYear("Egypt", [
		["1965-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1965-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1965-09-29T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1965-09-30T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1966" : helpers.makeTestYear("Egypt", [
		["1966-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1966-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1966-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1966-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1967" : helpers.makeTestYear("Egypt", [
		["1967-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1967-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1967-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1967-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1968" : helpers.makeTestYear("Egypt", [
		["1968-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1968-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1968-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1968-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1969" : helpers.makeTestYear("Egypt", [
		["1969-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1969-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1969-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1969-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1970" : helpers.makeTestYear("Egypt", [
		["1970-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1970-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1970-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1970-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1971" : helpers.makeTestYear("Egypt", [
		["1971-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1971-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1971-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1971-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1972" : helpers.makeTestYear("Egypt", [
		["1972-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1972-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1972-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1972-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1973" : helpers.makeTestYear("Egypt", [
		["1973-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1973-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1973-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1973-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1974" : helpers.makeTestYear("Egypt", [
		["1974-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1974-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1974-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1974-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1975" : helpers.makeTestYear("Egypt", [
		["1975-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1975-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1975-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1975-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1976" : helpers.makeTestYear("Egypt", [
		["1976-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1976-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1976-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1976-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1977" : helpers.makeTestYear("Egypt", [
		["1977-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1977-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1977-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1977-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1978" : helpers.makeTestYear("Egypt", [
		["1978-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1978-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1978-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1978-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1979" : helpers.makeTestYear("Egypt", [
		["1979-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1979-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1979-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1979-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1980" : helpers.makeTestYear("Egypt", [
		["1980-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1980-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1980-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1980-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1981" : helpers.makeTestYear("Egypt", [
		["1981-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1981-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1981-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1981-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1982" : helpers.makeTestYear("Egypt", [
		["1982-07-24T22:59:59+00:00", "00:59:59", "EET", -120],
		["1982-07-24T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1982-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1982-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1983" : helpers.makeTestYear("Egypt", [
		["1983-07-11T22:59:59+00:00", "00:59:59", "EET", -120],
		["1983-07-11T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1983-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1983-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1984" : helpers.makeTestYear("Egypt", [
		["1984-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1984-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1984-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1984-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1985" : helpers.makeTestYear("Egypt", [
		["1985-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1985-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1985-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1985-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1986" : helpers.makeTestYear("Egypt", [
		["1986-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1986-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1986-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1986-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1987" : helpers.makeTestYear("Egypt", [
		["1987-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1987-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1987-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1987-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1988" : helpers.makeTestYear("Egypt", [
		["1988-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1988-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1988-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1988-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1989" : helpers.makeTestYear("Egypt", [
		["1989-05-05T22:59:59+00:00", "00:59:59", "EET", -120],
		["1989-05-05T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1989-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1989-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1990" : helpers.makeTestYear("Egypt", [
		["1990-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1990-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1990-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1990-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1991" : helpers.makeTestYear("Egypt", [
		["1991-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1991-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1991-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1991-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1992" : helpers.makeTestYear("Egypt", [
		["1992-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1992-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1992-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1992-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1993" : helpers.makeTestYear("Egypt", [
		["1993-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1993-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1993-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1993-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1994" : helpers.makeTestYear("Egypt", [
		["1994-04-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1994-04-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1994-09-30T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1994-10-01T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1995" : helpers.makeTestYear("Egypt", [
		["1995-04-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["1995-04-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1995-09-28T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1995-09-28T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1996" : helpers.makeTestYear("Egypt", [
		["1996-04-25T21:59:59+00:00", "23:59:59", "EET", -120],
		["1996-04-25T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1996-09-26T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1996-09-26T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1997" : helpers.makeTestYear("Egypt", [
		["1997-04-24T21:59:59+00:00", "23:59:59", "EET", -120],
		["1997-04-24T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1997-09-25T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1997-09-25T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1998" : helpers.makeTestYear("Egypt", [
		["1998-04-23T21:59:59+00:00", "23:59:59", "EET", -120],
		["1998-04-23T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1998-09-24T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1998-09-24T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1999" : helpers.makeTestYear("Egypt", [
		["1999-04-29T21:59:59+00:00", "23:59:59", "EET", -120],
		["1999-04-29T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1999-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1999-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2000" : helpers.makeTestYear("Egypt", [
		["2000-04-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2000-04-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2000-09-28T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2000-09-28T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2001" : helpers.makeTestYear("Egypt", [
		["2001-04-26T21:59:59+00:00", "23:59:59", "EET", -120],
		["2001-04-26T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2001-09-27T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2001-09-27T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2002" : helpers.makeTestYear("Egypt", [
		["2002-04-25T21:59:59+00:00", "23:59:59", "EET", -120],
		["2002-04-25T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2002-09-26T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2002-09-26T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2003" : helpers.makeTestYear("Egypt", [
		["2003-04-24T21:59:59+00:00", "23:59:59", "EET", -120],
		["2003-04-24T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2003-09-25T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2003-09-25T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2004" : helpers.makeTestYear("Egypt", [
		["2004-04-29T21:59:59+00:00", "23:59:59", "EET", -120],
		["2004-04-29T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2004-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2004-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2005" : helpers.makeTestYear("Egypt", [
		["2005-04-28T21:59:59+00:00", "23:59:59", "EET", -120],
		["2005-04-28T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2005-09-29T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2005-09-29T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2006" : helpers.makeTestYear("Egypt", [
		["2006-04-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2006-04-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2006-09-21T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2006-09-21T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2007" : helpers.makeTestYear("Egypt", [
		["2007-04-26T21:59:59+00:00", "23:59:59", "EET", -120],
		["2007-04-26T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2007-09-06T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2007-09-06T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2008" : helpers.makeTestYear("Egypt", [
		["2008-04-24T21:59:59+00:00", "23:59:59", "EET", -120],
		["2008-04-24T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2008-08-28T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2008-08-28T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2009" : helpers.makeTestYear("Egypt", [
		["2009-04-23T21:59:59+00:00", "23:59:59", "EET", -120],
		["2009-04-23T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2009-08-20T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2009-08-20T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2010" : helpers.makeTestYear("Egypt", [
		["2010-04-29T21:59:59+00:00", "23:59:59", "EET", -120],
		["2010-04-29T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2010-08-10T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2010-08-10T21:00:00+00:00", "23:00:00", "EET", -120],
		["2010-09-09T21:59:59+00:00", "23:59:59", "EET", -120],
		["2010-09-09T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2010-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2010-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2014" : helpers.makeTestYear("Egypt", [
		["2014-05-15T21:59:59+00:00", "23:59:59", "EET", -120],
		["2014-05-15T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2014-06-28T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2014-06-28T22:00:00+00:00", "00:00:00", "EET", -120],
		["2014-07-28T21:59:59+00:00", "23:59:59", "EET", -120],
		["2014-07-28T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2014-09-25T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2014-09-25T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2015" : helpers.makeTestYear("Egypt", [
		["2015-04-23T21:59:59+00:00", "23:59:59", "EET", -120],
		["2015-04-23T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2015-06-17T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2015-06-17T22:00:00+00:00", "00:00:00", "EET", -120],
		["2015-07-17T21:59:59+00:00", "23:59:59", "EET", -120],
		["2015-07-17T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2015-09-24T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2015-09-24T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2016" : helpers.makeTestYear("Egypt", [
		["2016-04-28T21:59:59+00:00", "23:59:59", "EET", -120],
		["2016-04-28T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2016-06-06T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2016-06-06T22:00:00+00:00", "00:00:00", "EET", -120],
		["2016-07-06T21:59:59+00:00", "23:59:59", "EET", -120],
		["2016-07-06T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2016-09-29T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2016-09-29T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2017" : helpers.makeTestYear("Egypt", [
		["2017-04-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2017-04-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2017-05-26T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2017-05-26T22:00:00+00:00", "00:00:00", "EET", -120],
		["2017-06-25T21:59:59+00:00", "23:59:59", "EET", -120],
		["2017-06-25T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2017-09-28T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2017-09-28T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2018" : helpers.makeTestYear("Egypt", [
		["2018-04-26T21:59:59+00:00", "23:59:59", "EET", -120],
		["2018-04-26T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2018-05-15T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2018-05-15T22:00:00+00:00", "00:00:00", "EET", -120],
		["2018-06-14T21:59:59+00:00", "23:59:59", "EET", -120],
		["2018-06-14T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2018-09-27T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2018-09-27T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2019" : helpers.makeTestYear("Egypt", [
		["2019-04-25T21:59:59+00:00", "23:59:59", "EET", -120],
		["2019-04-25T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2019-05-05T21:59:59+00:00", "00:59:59", "EEST", -180],
		["2019-05-05T22:00:00+00:00", "00:00:00", "EET", -120],
		["2019-06-04T21:59:59+00:00", "23:59:59", "EET", -120],
		["2019-06-04T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2019-09-26T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2019-09-26T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2020" : helpers.makeTestYear("Egypt", [
		["2020-05-23T21:59:59+00:00", "23:59:59", "EET", -120],
		["2020-05-23T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2020-09-24T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2020-09-24T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2021" : helpers.makeTestYear("Egypt", [
		["2021-05-12T21:59:59+00:00", "23:59:59", "EET", -120],
		["2021-05-12T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2021-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2021-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2022" : helpers.makeTestYear("Egypt", [
		["2022-05-02T21:59:59+00:00", "23:59:59", "EET", -120],
		["2022-05-02T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2022-09-29T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2022-09-29T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2023" : helpers.makeTestYear("Egypt", [
		["2023-04-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2023-04-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2023-09-28T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2023-09-28T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2024" : helpers.makeTestYear("Egypt", [
		["2024-04-25T21:59:59+00:00", "23:59:59", "EET", -120],
		["2024-04-25T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2024-09-26T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2024-09-26T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2025" : helpers.makeTestYear("Egypt", [
		["2025-04-24T21:59:59+00:00", "23:59:59", "EET", -120],
		["2025-04-24T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2025-09-25T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2025-09-25T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2026" : helpers.makeTestYear("Egypt", [
		["2026-04-23T21:59:59+00:00", "23:59:59", "EET", -120],
		["2026-04-23T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2026-09-24T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2026-09-24T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2027" : helpers.makeTestYear("Egypt", [
		["2027-04-29T21:59:59+00:00", "23:59:59", "EET", -120],
		["2027-04-29T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2027-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2027-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2028" : helpers.makeTestYear("Egypt", [
		["2028-04-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2028-04-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2028-09-28T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2028-09-28T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2029" : helpers.makeTestYear("Egypt", [
		["2029-04-26T21:59:59+00:00", "23:59:59", "EET", -120],
		["2029-04-26T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2029-09-27T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2029-09-27T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2030" : helpers.makeTestYear("Egypt", [
		["2030-04-25T21:59:59+00:00", "23:59:59", "EET", -120],
		["2030-04-25T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2030-09-26T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2030-09-26T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2031" : helpers.makeTestYear("Egypt", [
		["2031-04-24T21:59:59+00:00", "23:59:59", "EET", -120],
		["2031-04-24T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2031-09-25T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2031-09-25T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2032" : helpers.makeTestYear("Egypt", [
		["2032-04-29T21:59:59+00:00", "23:59:59", "EET", -120],
		["2032-04-29T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2032-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2032-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2033" : helpers.makeTestYear("Egypt", [
		["2033-04-28T21:59:59+00:00", "23:59:59", "EET", -120],
		["2033-04-28T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2033-09-29T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2033-09-29T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2034" : helpers.makeTestYear("Egypt", [
		["2034-04-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["2034-04-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2034-09-28T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2034-09-28T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2035" : helpers.makeTestYear("Egypt", [
		["2035-04-26T21:59:59+00:00", "23:59:59", "EET", -120],
		["2035-04-26T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2035-09-27T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2035-09-27T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2036" : helpers.makeTestYear("Egypt", [
		["2036-04-24T21:59:59+00:00", "23:59:59", "EET", -120],
		["2036-04-24T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2036-09-25T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2036-09-25T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"2037" : helpers.makeTestYear("Egypt", [
		["2037-04-23T21:59:59+00:00", "23:59:59", "EET", -120],
		["2037-04-23T22:00:00+00:00", "01:00:00", "EEST", -180],
		["2037-09-24T20:59:59+00:00", "23:59:59", "EEST", -180],
		["2037-09-24T21:00:00+00:00", "23:00:00", "EET", -120]
	])
};