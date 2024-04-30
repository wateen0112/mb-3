export class  PermissionDto {
  id: number=0;
  title__ml: Titleml={en:'',ar:''};
  slug: string='';
}

interface Titleml {
  en: string;
  ar: string;
}
