import { Controller, Get } from "@nestjs/common";
import { LoanProductService } from '../services/loan-product.service';
import { ApiResponse } from "src/shared/response/api-response";

@Controller("api/v1/loan-products")
export class LoanProductController {
  constructor(
    private readonly service: LoanProductService,
  ) {}

 @Get()
  async listLoanProducts() {

    const data = await this.service.getLoanCatalog();

    return ApiResponse.success(
      "Loan products fetched successfullyy",
      data,
    );
  }
}
