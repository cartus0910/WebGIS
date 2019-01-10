library(readr)
library(dplyr)
library(rjson)
library(jsonlite)

Case_7_result <- read_csv("D:/107-1 Web GIS/WebGIS/Final_Project/Case_7_result.csv")
Case_8_result <- read_csv("D:/107-1 Web GIS/WebGIS/Final_Project/Case_8_result.csv")
Case_9_result <- read_csv("D:/107-1 Web GIS/WebGIS/Final_Project/Case_9_result.csv")
Case_10_result <- read_csv("D:/107-1 Web GIS/WebGIS/Final_Project/Case_10_result.csv")
Case_11_result <- read_csv("D:/107-1 Web GIS/WebGIS/Final_Project/Case_11_result.csv")
Case_12_result <- read_csv("D:/107-1 Web GIS/WebGIS/Final_Project/Case_12_result.csv")
Case_13_result <- read_csv("D:/107-1 Web GIS/WebGIS/Final_Project/Case_13_result.csv")
Case_14_result <- read_csv("D:/107-1 Web GIS/WebGIS/Final_Project/Case_14_result.csv")
Case_15_result <- read_csv("D:/107-1 Web GIS/WebGIS/Final_Project/Case_15_result.csv")
Case_16_result <- read_csv("D:/107-1 Web GIS/WebGIS/Final_Project/Case_16_result.csv")

num_case <- 6

sorts <- function (case){
  
  num_case <- num_case+1
  
  case_vill <- case[seq(391,16277),] 
  
  case_vill_g <- case_vill %>%
    group_by(郡カ, ︽現跋, ń) %>%
    summarise(population=sum(щ布舦计),
              yes_vote=sum(種布计),
              no_vote=sum(ぃ種布计),
              all_vote=sum(Τ布计),
              spoilt=sum(礚布计),
              voter=sum(щ布计),
              agree_rate=(yes_vote / all_vote)
    )
  
  case_json <- toJSON(case_vill_g, pretty = TRUE)
  file.name <- paste('D:/107-1 Web GIS/WebGIS/Final_Project/case', num_case,'_vill.txt')
  cat(case_json, file = , fill = FALSE, labels = NULL, append = FALSE)
}


sorts(Case_7_result)











