#include "app/models/Article.hpp"

#include <html.h>
#include <document.h>

namespace app { namespace models {

  Article::Article()
  {
    this->id = 0;
  }

  Article::Article(const std::string& slug)
  {
    std::pair<std::string, std::string> w("slug", slug);
    this->id = m_connector.select<int>(
      m_primaryKeyName,
      m_tableName,
      w
      );

    this->slug = slug;
  }

  Article::Article(const int id)
  {
    this->id = id;
  }

  Article::TypeText Article::getTypeText()
  {
    int type = this->getType();

    Article::TypeText typeText;

    switch (type)
    {
      case 0:
        typeText.iconClassName = "fa fa-fw fa-pencil";
        typeText.featuredClassName = "featured-image";
        break;
      case 1:
        typeText.iconClassName = "fa fa-fw fa-pencil";
        typeText.featuredClassName = "featured-image";
        break;
      default:
        typeText.iconClassName = "fa fa-fw fa-video";
        typeText.featuredClassName = "featured-video";
        typeText.name = "video";
    }

    return typeText;
  }

  std::string Article::getContentHtml()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      if (m_contentHtml.empty())
      {
        std::string content = this->getContent();

        hoedown_html_flags html_flags;
        hoedown_renderer *renderer = hoedown_html_renderer_new(
          html_flags, 0
          );

        hoedown_extensions extensions;
        hoedown_document *document = hoedown_document_new(
          renderer, extensions, 16
          );

        hoedown_buffer *ob = hoedown_buffer_new(content.size());

        hoedown_document_render(
          document, ob, (uint8_t*)(content.c_str()), content.size()
          );

        m_contentHtml = std::string((char*)(ob->data));
      }

      return m_contentHtml;
    }
    __APP_TRY_CATCH_END__
  }

} }

