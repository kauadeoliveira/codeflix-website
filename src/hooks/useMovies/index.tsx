import { getCategory } from "@/services/http";
import { useQuery } from "react-query";
import { useState, useEffect } from "react"
import { Movie } from "@/types/utils";
import { removeRepeat } from "@/utils";
