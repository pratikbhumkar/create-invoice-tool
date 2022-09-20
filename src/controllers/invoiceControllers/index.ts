import { IInvoice } from '../../interfaces/InvoiceInterface'
import { createInvoiceHandler } from '../../services/invoiceServices/createInvoiceHandler'
import { disableInvoiceHandler } from '../../services/invoiceServices/disableInvoiceHandler'
import { enableInvoiceHandler } from '../../services/invoiceServices/enableInvoiceHandler'
import { getInvoiceHandler } from '../../services/invoiceServices/getInvoiceHandler'
import { updateInvoiceHandler } from '../../services/invoiceServices/updateInvoiceHandler'
import { listInvoiceHandler } from '../../services/invoiceServices/listinvoiceHandler'

export const createInvoice = async (invoice: IInvoice): Promise<IInvoice> => await createInvoiceHandler(invoice)

export const updateInvoice = async (invoice: IInvoice): Promise<IInvoice> => await updateInvoiceHandler(invoice)

export const disableInvoice = async (invoiceNumber: String): Promise<boolean> => await disableInvoiceHandler(invoiceNumber)

export const enableInvoice = async (invoiceNumber: String): Promise<boolean> => await enableInvoiceHandler(invoiceNumber)

export const getInvoice = async (invoiceNumber: String): Promise<IInvoice | null> => await getInvoiceHandler(invoiceNumber)

export const invoiceList = async (): Promise<IInvoice[]> => await listInvoiceHandler()
