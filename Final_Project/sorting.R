library(readr)
library(dplyr)
library(rjson)
library(jsonlite)

Case_7_result <- read_csv("D:/107-1 Web GIS/WebGIS/Final_Project/Case_7_result.csv")

CASE_7_vill <- Case_7_result[seq(391,16277),] 

case_7_vill <- CASE_7_vill %>%
  group_by(郡カ, ︽現跋, ń) %>%
  summarise(population=sum(щ布舦计),
            yes_vote=sum(種布计),
            no_vote=sum(ぃ種布计),
            all_vote=sum(Τ布计),
            spoilt=sum(礚布计),
            voter=sum(щ布计)
            )

case_7_json <- toJSON(case_7_vill, pretty = TRUE)
str(case_7_json)
cat(case_7_json, file = 'D:/107-1 Web GIS/WebGIS/Final_Project/case7_vill.txt', fill = FALSE, labels = NULL, append = FALSE)

save(case_7_json, file="D:/107-1 Web GIS/WebGIS/Final_Project/case7_vill.JSON")
